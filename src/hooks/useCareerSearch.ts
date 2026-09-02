import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { CareerRole } from '../types/pathway';
import { CURATED_CAREER_PATHWAYS } from '../data/curatedPathways';
import { UNIVERSAL_DOMAINS } from '../data/universalDomains';
import { generateDynamicCareerPathway } from '../lib/aiEngine';
import { usePathwayStore } from '../store/pathwayStore';
import { extractCareerIntent, ExtractedIntent } from '../lib/intentExtractor';

export interface SearchCandidate {
  id: string;
  title: string;
  domainName: string;
  domainId: string;
  shortDescription: string;
  tags: string[];
  isCurated: boolean;
}

export function useCareerSearch() {
  const { setActiveRole, setCustomRoleLoading, geminiApiKey } = usePathwayStore();
  const [isSearching, setIsSearching] = useState(false);

  // 1. Flatten all candidates into searchable list
  const searchIndex = useMemo(() => {
    const list: SearchCandidate[] = [];

    // Add curated roles
    Object.values(CURATED_CAREER_PATHWAYS).forEach(role => {
      list.push({
        id: role.id,
        title: role.title,
        domainName: role.domainName,
        domainId: role.domainId,
        shortDescription: role.shortDescription,
        tags: role.tags,
        isCurated: true
      });
    });

    // Add popular domain roles
    UNIVERSAL_DOMAINS.forEach(domain => {
      domain.popularRoles.forEach(p => {
        if (!list.some(item => item.id === p.id)) {
          list.push({
            id: p.id,
            title: p.title,
            domainName: domain.name,
            domainId: domain.id,
            shortDescription: `Pioneer a career as a professional ${p.title} in ${domain.name}.`,
            tags: [p.title, domain.name, p.slug],
            isCurated: false
          });
        }
      });
    });

    return list;
  }, []);

  // 2. Fuse.js instance with tuned weights
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'tags', weight: 0.3 },
        { name: 'domainName', weight: 0.1 }
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2
    });
  }, [searchIndex]);

  // 3. Search query executor with Intent & Keyword Extraction
  const searchRoles = (query: string, domainFilter?: string): { candidates: SearchCandidate[]; intent: ExtractedIntent } => {
    const cleanQuery = query.trim();
    const intent = extractCareerIntent(cleanQuery);

    if (!cleanQuery) {
      let defaultList = searchIndex;
      if (domainFilter && domainFilter !== 'all') {
        defaultList = searchIndex.filter(c => c.domainId === domainFilter);
      }
      return {
        candidates: defaultList.slice(0, 12),
        intent
      };
    }

    const matchedMap = new Map<string, SearchCandidate>();

    // 3a. If high-confidence role key was extracted directly from synonyms
    if (intent.extractedRoleKey) {
      const directMatch = searchIndex.find(c => c.id === intent.extractedRoleKey);
      if (directMatch) {
        matchedMap.set(directMatch.id, directMatch);
      }
    }

    // 3b. Search using extracted clean keyword (e.g. "lawyer" instead of "i wanna become lawyer")
    const searchTarget = intent.cleanedKeyword || cleanQuery;
    const fuseResults = fuse.search(searchTarget);
    fuseResults.forEach(r => {
      if (!matchedMap.has(r.item.id)) {
        matchedMap.set(r.item.id, r.item);
      }
    });

    // 3c. If searching with cleaned keyword had fewer results, try raw query as fallback
    if (searchTarget !== cleanQuery && matchedMap.size < 3) {
      const rawResults = fuse.search(cleanQuery);
      rawResults.forEach(r => {
        if (!matchedMap.has(r.item.id)) {
          matchedMap.set(r.item.id, r.item);
        }
      });
    }

    // 3d. Check direct token containment in titles & tags
    const lowerKeyword = searchTarget.toLowerCase();
    searchIndex.forEach(c => {
      if (!matchedMap.has(c.id)) {
        const titleMatch = c.title.toLowerCase().includes(lowerKeyword);
        const tagMatch = c.tags.some(t => t.toLowerCase().includes(lowerKeyword));
        if (titleMatch || tagMatch) {
          matchedMap.set(c.id, c);
        }
      }
    });

    let resultList = Array.from(matchedMap.values());

    if (domainFilter && domainFilter !== 'all') {
      resultList = resultList.filter(c => c.domainId === domainFilter);
    }

    return {
      candidates: resultList,
      intent
    };
  };

  // 4. Select or dynamically synthesize a career role
  const selectOrGenerateRole = async (candidateOrQuery: string | SearchCandidate) => {
    setIsSearching(true);
    setCustomRoleLoading(true);

    try {
      let queryStr: string;
      if (typeof candidateOrQuery === 'string') {
        queryStr = candidateOrQuery;
      } else {
        queryStr = candidateOrQuery.title;
      }

      const role = await generateDynamicCareerPathway(queryStr, geminiApiKey);
      setActiveRole(role);
      return role;
    } catch (e) {
      console.error('Failed to select or generate pathway:', e);
    } finally {
      setIsSearching(false);
      setCustomRoleLoading(false);
    }
  };

  return {
    searchRoles,
    selectOrGenerateRole,
    isSearching,
    allCandidates: searchIndex
  };
}

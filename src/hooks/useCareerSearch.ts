import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { CareerRole } from '../types/pathway';
import { CURATED_CAREER_PATHWAYS } from '../data/curatedPathways';
import { UNIVERSAL_DOMAINS } from '../data/universalDomains';
import { generateDynamicCareerPathway } from '../lib/aiEngine';
import { usePathwayStore } from '../store/pathwayStore';

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
      threshold: 0.35,
      includeScore: true,
      minMatchCharLength: 2
    });
  }, [searchIndex]);

  // 3. Search query executor
  const searchRoles = (query: string, domainFilter?: string): SearchCandidate[] => {
    const cleanQuery = query.trim();
    if (!cleanQuery) {
      if (domainFilter && domainFilter !== 'all') {
        return searchIndex.filter(c => c.domainId === domainFilter);
      }
      return searchIndex.slice(0, 12);
    }

    const results = fuse.search(cleanQuery);
    let matched = results.map(r => r.item);

    if (domainFilter && domainFilter !== 'all') {
      matched = matched.filter(c => c.domainId === domainFilter);
    }

    return matched;
  };

  // 4. Select or dynamically synthesize a career role
  const selectOrGenerateRole = async (candidateOrQuery: string | SearchCandidate) => {
    setIsSearching(true);
    setCustomRoleLoading(true);

    try {
      const queryStr = typeof candidateOrQuery === 'string' ? candidateOrQuery : candidateOrQuery.title;
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

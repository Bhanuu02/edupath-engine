/**
 * Intent Extractor for PathFinder AI
 * Cleans conversational queries (e.g., "i wanna become lawyer", "how to become a commercial pilot")
 * and extracts the targeted core profession keyword and mapped career key.
 */

export interface ExtractedIntent {
  rawQuery: string;
  cleanedKeyword: string;
  extractedRoleKey: string | null;
  confidence: number;
  matchedTitle?: string;
  isConversational: boolean;
}

// Common conversational phrasing prefixes & fillers
const CONVERSATIONAL_PATTERNS = [
  /^(?:i\s+)?(?:wanna|want\s+to|wish\s+to|would\s+like\s+to|am\s+looking\s+to|hope\s+to)\s+(?:become|be|pursue|join|work\s+as|study)\s+(?:a|an|the)?\s*/i,
  /^(?:how\s+(?:can|do|should)\s+i|how\s+to)\s+(?:become|be|join|get\s+into|work\s+as|pursue)\s+(?:a|an|the)?\s*/i,
  /^(?:what\s+is\s+the\s+)?(?:path|pathway|roadmap|guide|steps|process)\s+(?:to|for|of)\s+(?:become|becoming|a|an|the)?\s*/i,
  /^(?:career|jobs?)\s+(?:in|as|for)\s+(?:a|an|the)?\s*/i,
  /^(?:tell\s+me\s+(?:about|how\s+to\s+become)|guide\s+me\s+to\s+become|help\s+me\s+become)\s+(?:a|an|the)?\s*/i,
  /^(?:interested\s+in\s+(?:becoming|being|studying)?)\s+(?:a|an|the)?\s*/i,
  /^(?:steps|guide|roadmap)\s+(?:to|for)\s+(?:become|becoming)?\s*(?:a|an|the)?\s*/i,
  /^(?:becoming|being)\s+(?:a|an|the)?\s*/i,
  /^(?:can\s+i\s+become|should\s+i\s+become)\s+(?:a|an|the)?\s*/i,
  /^(?:i\s+want|i\s+wanna)\s+(?:a|an|the)?\s*/i,
  /^(?:i\s+dream\s+of\s+becoming|aspiring)\s+(?:a|an|the)?\s*/i,
];

// Single stop words to filter out when tokenizing
const STOP_WORDS = new Set([
  'i', 'me', 'my', 'myself', 'we', 'our',
  'wanna', 'want', 'to', 'become', 'be', 'becoming', 'being',
  'a', 'an', 'the', 'in', 'as', 'for', 'of', 'at', 'by', 'with', 'about',
  'how', 'can', 'do', 'does', 'should', 'would', 'could', 'is', 'am', 'are', 'was', 'were',
  'please', 'tell', 'give', 'show', 'find', 'get',
  'path', 'pathway', 'pathways', 'roadmap', 'roadmaps', 'guide', 'steps',
  'career', 'careers', 'job', 'jobs', 'profession', 'course', 'courses', 'future'
]);

// High-confidence synonym & alias dictionary mapped to curated & popular role IDs
const SYNONYM_MAP: Record<string, { roleKey: string; title: string }> = {
  // Law & Legal
  'lawyer': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'law': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'corporate lawyer': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'advocate': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'attorney': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'judge': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'magistrate': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'legal counsel': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'clat': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'nlu': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'llb': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },
  'litigation': { roleKey: 'corporate_lawyer', title: 'Corporate M&A Lawyer & General Counsel' },

  // Aviation & Defense
  'pilot': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'commercial pilot': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'airline pilot': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'cpl': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'aviator': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'aviation': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'fly planes': { roleKey: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL Captain)' },
  'fighter pilot': { roleKey: 'iaf_fighter_pilot', title: 'IAF Fighter Pilot / Armed Forces Officer (NDA)' },
  'nda': { roleKey: 'iaf_fighter_pilot', title: 'IAF Fighter Pilot / Armed Forces Officer (NDA)' },
  'air force': { roleKey: 'iaf_fighter_pilot', title: 'IAF Fighter Pilot / Armed Forces Officer (NDA)' },
  'airforce': { roleKey: 'iaf_fighter_pilot', title: 'IAF Fighter Pilot / Armed Forces Officer (NDA)' },
  'merchant navy': { roleKey: 'merchant_navy_officer', title: 'Merchant Navy Deck Navigation Officer' },
  'navy': { roleKey: 'merchant_navy_officer', title: 'Merchant Navy Deck Navigation Officer' },
  'ship captain': { roleKey: 'merchant_navy_officer', title: 'Merchant Navy Deck Navigation Officer' },

  // Film & Theatre
  'director': { roleKey: 'film_director', title: 'Film Director / Visionary Filmmaker' },
  'film director': { roleKey: 'film_director', title: 'Film Director / Visionary Filmmaker' },
  'filmmaker': { roleKey: 'film_director', title: 'Film Director / Visionary Filmmaker' },
  'movie director': { roleKey: 'film_director', title: 'Film Director / Visionary Filmmaker' },
  'cinema': { roleKey: 'film_director', title: 'Film Director / Visionary Filmmaker' },
  'ftii': { roleKey: 'film_director', title: 'Film Director / Visionary Filmmaker' },
  'actor': { roleKey: 'professional_actor', title: 'Film & Stage Actor / Method Performer' },
  'actress': { roleKey: 'professional_actor', title: 'Film & Stage Actor / Method Performer' },
  'acting': { roleKey: 'professional_actor', title: 'Film & Stage Actor / Method Performer' },
  'theatre actor': { roleKey: 'professional_actor', title: 'Film & Stage Actor / Method Performer' },
  'drama': { roleKey: 'professional_actor', title: 'Film & Stage Actor / Method Performer' },
  'music producer': { roleKey: 'music_producer', title: 'Music Producer, Composer & Audio Architect' },
  'music director': { roleKey: 'music_producer', title: 'Music Producer, Composer & Audio Architect' },
  'composer': { roleKey: 'music_producer', title: 'Music Producer, Composer & Audio Architect' },
  'sound engineer': { roleKey: 'music_producer', title: 'Music Producer, Composer & Audio Architect' },
  'audio engineer': { roleKey: 'music_producer', title: 'Music Producer, Composer & Audio Architect' },

  // Culinary & Hospitality
  'chef': { roleKey: 'executive_chef', title: 'Executive Head Chef & Culinary Director' },
  'executive chef': { roleKey: 'executive_chef', title: 'Executive Head Chef & Culinary Director' },
  'head chef': { roleKey: 'executive_chef', title: 'Executive Head Chef & Culinary Director' },
  'cook': { roleKey: 'executive_chef', title: 'Executive Head Chef & Culinary Director' },
  'culinary': { roleKey: 'executive_chef', title: 'Executive Head Chef & Culinary Director' },
  'ihm': { roleKey: 'executive_chef', title: 'Executive Head Chef & Culinary Director' },
  'hotel manager': { roleKey: 'luxury_hotel_gm', title: 'Luxury Hotel General Manager' },
  'hotel management': { roleKey: 'luxury_hotel_gm', title: 'Luxury Hotel General Manager' },

  // Tech & AI
  'ai engineer': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'ai scientist': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'ai': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'artificial intelligence': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'machine learning': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'ml engineer': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'data scientist': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },
  'software engineer': { roleKey: 'ai_engineer', title: 'AI Research Engineer & Neural Architect' },

  // Civil Services
  'ias': { roleKey: 'ias_officer', title: 'IAS / IPS Civil Services Officer' },
  'ips': { roleKey: 'ias_officer', title: 'IAS / IPS Civil Services Officer' },
  'civil servant': { roleKey: 'ias_officer', title: 'IAS / IPS Civil Services Officer' },
  'civil services': { roleKey: 'ias_officer', title: 'IAS / IPS Civil Services Officer' },
  'upsc': { roleKey: 'ias_officer', title: 'IAS / IPS Civil Services Officer' },
  'collector': { roleKey: 'ias_officer', title: 'IAS / IPS Civil Services Officer' },

  // Design & Fashion
  'fashion designer': { roleKey: 'fashion_designer', title: 'Haute Couture & Apparel Designer' },
  'fashion': { roleKey: 'fashion_designer', title: 'Haute Couture & Apparel Designer' },
  'ui ux': { roleKey: 'ui_ux_designer', title: 'Product & UI/UX Designer' },
  'ui designer': { roleKey: 'ui_ux_designer', title: 'Product & UI/UX Designer' },
  'ux designer': { roleKey: 'ui_ux_designer', title: 'Product & UI/UX Designer' },
  'product designer': { roleKey: 'ui_ux_designer', title: 'Product & UI/UX Designer' },
  'game designer': { roleKey: 'game_3d_artist', title: '3D Game Artist & Character Modeler' },
  'game artist': { roleKey: 'game_3d_artist', title: '3D Game Artist & Character Modeler' },
};

/**
 * Parses user input, strips conversational boilerplate, and identifies target career intent.
 */
export function extractCareerIntent(inputQuery: string): ExtractedIntent {
  const raw = inputQuery.trim();
  if (!raw) {
    return {
      rawQuery: '',
      cleanedKeyword: '',
      extractedRoleKey: null,
      confidence: 0,
      isConversational: false
    };
  }

  let cleaned = raw;
  let isConversational = false;

  // 1. Try stripping conversational regex patterns
  for (const pattern of CONVERSATIONAL_PATTERNS) {
    if (pattern.test(cleaned)) {
      isConversational = true;
      cleaned = cleaned.replace(pattern, '').trim();
      break;
    }
  }

  // 2. Normalize and strip trailing punctuation
  cleaned = cleaned.replace(/[?!.,;:]+$/, '').trim().toLowerCase();

  // 3. If cleaning removed too much or left stop words, filter tokens
  const tokens = cleaned.split(/\s+/).filter(t => t.length > 0);
  const meaningfulTokens = tokens.filter(t => !STOP_WORDS.has(t));
  
  const finalKeyword = meaningfulTokens.length > 0 ? meaningfulTokens.join(' ') : cleaned;

  // 4. Check direct or multi-word match in SYNONYM_MAP
  if (SYNONYM_MAP[finalKeyword]) {
    const match = SYNONYM_MAP[finalKeyword];
    return {
      rawQuery: raw,
      cleanedKeyword: finalKeyword,
      extractedRoleKey: match.roleKey,
      matchedTitle: match.title,
      confidence: 1.0,
      isConversational
    };
  }

  // Check if any individual word in meaningfulTokens maps to a synonym
  for (const token of meaningfulTokens) {
    if (SYNONYM_MAP[token]) {
      const match = SYNONYM_MAP[token];
      return {
        rawQuery: raw,
        cleanedKeyword: token,
        extractedRoleKey: match.roleKey,
        matchedTitle: match.title,
        confidence: 0.95,
        isConversational: true
      };
    }
  }

  // Check partial match in synonym dictionary keys
  for (const [synKey, match] of Object.entries(SYNONYM_MAP)) {
    if (finalKeyword.includes(synKey) || synKey.includes(finalKeyword)) {
      return {
        rawQuery: raw,
        cleanedKeyword: finalKeyword,
        extractedRoleKey: match.roleKey,
        matchedTitle: match.title,
        confidence: 0.85,
        isConversational
      };
    }
  }

  return {
    rawQuery: raw,
    cleanedKeyword: finalKeyword || raw,
    extractedRoleKey: null,
    confidence: isConversational ? 0.6 : 0.4,
    isConversational
  };
}

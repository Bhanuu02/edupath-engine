import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CareerRole, StreamType, DomainId, ExamGateway } from '../types/pathway';
import { CURATED_CAREER_PATHWAYS } from '../data/curatedPathways';
import { COMPREHENSIVE_EXAMS } from '../data/examCatalog';

interface PathwayState {
  activeRole: CareerRole;
  selectedStream: StreamType;
  searchQuery: string;
  selectedDomain: DomainId | 'all';
  activeExam: ExamGateway | null;
  
  // Modals & Drawers
  isExamModalOpen: boolean;
  isStreamQuizOpen: boolean;
  isExportModalOpen: boolean;
  isCopilotOpen: boolean;
  isComparatorOpen: boolean;
  isCustomRoleLoading: boolean;

  // Persisted state
  bookmarkedRoleIds: string[];
  geminiApiKey: string;
  themeMode: 'dark' | 'light';

  // Actions
  setActiveRole: (role: CareerRole) => void;
  setActiveRoleById: (id: string) => void;
  setSelectedStream: (stream: StreamType) => void;
  setSearchQuery: (query: string) => void;
  setSelectedDomain: (domain: DomainId | 'all') => void;
  
  openExamModalById: (examId: string) => void;
  closeExamModal: () => void;
  
  setStreamQuizOpen: (open: boolean) => void;
  setExportModalOpen: (open: boolean) => void;
  setCopilotOpen: (open: boolean) => void;
  setComparatorOpen: (open: boolean) => void;
  setCustomRoleLoading: (loading: boolean) => void;

  toggleBookmark: (roleId: string) => void;
  setGeminiApiKey: (key: string) => void;
  toggleThemeMode: () => void;
}

export const usePathwayStore = create<PathwayState>()(
  persist(
    (set, get) => ({
      activeRole: CURATED_CAREER_PATHWAYS['film_director'] || Object.values(CURATED_CAREER_PATHWAYS)[0],
      selectedStream: 'HEC',
      searchQuery: '',
      selectedDomain: 'all',
      activeExam: null,

      isExamModalOpen: false,
      isStreamQuizOpen: false,
      isExportModalOpen: false,
      isCopilotOpen: false,
      isComparatorOpen: false,
      isCustomRoleLoading: false,

      bookmarkedRoleIds: ['film_director', 'ai_engineer', 'commercial_pilot'],
      geminiApiKey: '',
      themeMode: 'dark',

      setActiveRole: (role) => set({ activeRole: role }),
      
      setActiveRoleById: (id) => {
        const found = CURATED_CAREER_PATHWAYS[id];
        if (found) {
          set({ activeRole: found });
        }
      },

      setSelectedStream: (stream) => set({ selectedStream: stream }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedDomain: (domain) => set({ selectedDomain: domain }),

      openExamModalById: (examId) => {
        const exam = COMPREHENSIVE_EXAMS[examId];
        if (exam) {
          set({ activeExam: exam, isExamModalOpen: true });
        }
      },

      closeExamModal: () => set({ isExamModalOpen: false, activeExam: null }),

      setStreamQuizOpen: (open) => set({ isStreamQuizOpen: open }),
      setExportModalOpen: (open) => set({ isExportModalOpen: open }),
      setCopilotOpen: (open) => set({ isCopilotOpen: open }),
      setComparatorOpen: (open) => set({ isComparatorOpen: open }),
      setCustomRoleLoading: (loading) => set({ isCustomRoleLoading: loading }),

      toggleBookmark: (roleId) => {
        const current = get().bookmarkedRoleIds;
        if (current.includes(roleId)) {
          set({ bookmarkedRoleIds: current.filter(id => id !== roleId) });
        } else {
          set({ bookmarkedRoleIds: [...current, roleId] });
        }
      },

      setGeminiApiKey: (key) => set({ geminiApiKey: key }),
      toggleThemeMode: () => set((state) => ({ themeMode: state.themeMode === 'dark' ? 'light' : 'dark' }))
    }),
    {
      name: 'edupath_user_storage',
      partialize: (state) => ({
        bookmarkedRoleIds: state.bookmarkedRoleIds,
        geminiApiKey: state.geminiApiKey,
        themeMode: state.themeMode
      })
    }
  )
);

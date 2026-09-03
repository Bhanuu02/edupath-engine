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
  
  // Navigation Views
  currentView: 'home' | 'pathway';
  navigateToHome: () => void;
  navigateToPathway: (role?: CareerRole) => void;

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
      currentView: 'home',

      isExamModalOpen: false,
      isStreamQuizOpen: false,
      isExportModalOpen: false,
      isCopilotOpen: false,
      isComparatorOpen: false,
      isCustomRoleLoading: false,

      bookmarkedRoleIds: ['soldier_defense_forces', 'vlsi_semiconductor_engineer', 'civil_services_officer', 'film_director', 'commercial_pilot'],
      geminiApiKey: '',
      themeMode: 'light',

      navigateToHome: () => {
        set({ currentView: 'home' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      navigateToPathway: (role) => {
        if (role) {
          set({ activeRole: role, currentView: 'pathway' });
        } else {
          set({ currentView: 'pathway' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      setActiveRole: (role) => set({ activeRole: role, currentView: 'pathway' }),
      
      setActiveRoleById: (id) => {
        const found = CURATED_CAREER_PATHWAYS[id];
        if (found) {
          set({ activeRole: found, currentView: 'pathway' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      },

      setSelectedStream: (stream) => set({ selectedStream: stream }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedDomain: (domain) => set({ selectedDomain: domain }),

      openExamModalById: (examId) => {
        const cleanName = examId.replace(/_/g, ' ');
        const exam = COMPREHENSIVE_EXAMS[examId] || {
          id: examId,
          name: cleanName,
          fullName: `${cleanName} National Examination & Gateway`,
          conductingBody: 'National / State Accredited Examining Body',
          targetLevel: 'GRADUATE',
          category: 'Competitive Gateway & Admissions',
          eligibility: 'Qualifying marks in relevant 10th, 12th, or Bachelor’s degree program from a recognized board/university.',
          examPattern: 'Computer Based Test (CBT) or Descriptive Studio Audition evaluating core analytical, domain-specific, and problem-solving aptitude.',
          annualApplicants: 'Competitive national testing pool',
          acceptanceRate: 'Merit-based admission quota',
          competitionLevel: 'VERY_HIGH',
          syllabusHighlights: ['Core domain concepts & analytical problem solving', 'General mental ability & quantitative aptitude', 'Practical aptitude & domain fundamentals'],
          keyDatesInfo: 'Annual national cycle (Notifications released periodically)'
        };
        set({ activeExam: exam, isExamModalOpen: true });
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

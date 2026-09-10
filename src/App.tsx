import React from 'react';
import { usePathwayStore } from './store/pathwayStore';
import { Navbar } from './components/common/Navbar';
import { HomeLandingView } from './components/home/HomeLandingView';
import { PathwayDetailView } from './components/pathways/PathwayDetailView';
import { RouteComparatorMatrix } from './components/comparator/RouteComparatorMatrix';
import { ExamDetailModal } from './components/modals/ExamDetailModal';
import { StreamQuizModal } from './components/modals/StreamQuizModal';
import { ExportPdfModal } from './components/modals/ExportPdfModal';
import { CareerCopilotModal } from './components/modals/CareerCopilotModal';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  const { currentView } = usePathwayStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-stone-50 to-orange-50/30 text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white font-sans">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentView === 'home' ? (
          <HomeLandingView />
        ) : (
          <PathwayDetailView />
        )}
      </main>

      {/* Interactive Modals and Drawers */}
      <RouteComparatorMatrix />
      <ExamDetailModal />
      <StreamQuizModal />
      <ExportPdfModal />
      <CareerCopilotModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

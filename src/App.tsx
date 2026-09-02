import React from 'react';
import { Navbar } from './components/common/Navbar';
import { HomeLandingView } from './components/home/HomeLandingView';
import { PathwayDetailView } from './components/pathways/PathwayDetailView';
import { RouteComparatorMatrix } from './components/comparator/RouteComparatorMatrix';
import { ExamDetailModal } from './components/modals/ExamDetailModal';
import { StreamQuizModal } from './components/modals/StreamQuizModal';
import { ExportPdfModal } from './components/modals/ExportPdfModal';
import { CareerCopilotModal } from './components/modals/CareerCopilotModal';
import { Footer } from './components/common/Footer';
import { usePathwayStore } from './store/pathwayStore';

export const App: React.FC = () => {
  const { currentView } = usePathwayStore();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white font-sans">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Area: Home Landing vs Dedicated Pathway View */}
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

import React from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSearch } from './components/search/HeroSearch';
import { FlowTreeGraph } from './components/pathways/FlowTreeGraph';
import { RouteComparatorMatrix } from './components/comparator/RouteComparatorMatrix';
import { ExamDetailModal } from './components/modals/ExamDetailModal';
import { StreamQuizModal } from './components/modals/StreamQuizModal';
import { ExportPdfModal } from './components/modals/ExportPdfModal';
import { CareerCopilotModal } from './components/modals/CareerCopilotModal';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-stone-50 to-orange-50/30 text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white font-sans">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full space-y-6">
        <HeroSearch />
        <FlowTreeGraph />
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

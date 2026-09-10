import React, { useState } from 'react';
import { Compass, Sparkles, Bookmark, BookmarkCheck, HelpCircle, FileDown, Layers, X, ArrowRight, Trash2 } from 'lucide-react';
import { usePathwayStore } from '../../store/pathwayStore';
import { CURATED_CAREER_PATHWAYS } from '../../data/curatedPathways';

export const Navbar: React.FC = () => {
  const {
    bookmarkedRoleIds,
    setStreamQuizOpen,
    setExportModalOpen,
    setComparatorOpen,
    setCopilotOpen,
    navigateToHome,
    navigateToPathway,
    setActiveRoleById,
    toggleBookmark,
  } = usePathwayStore();

  const [bookmarkPanelOpen, setBookmarkPanelOpen] = useState(false);

  const bookmarkedRoles = bookmarkedRoleIds
    .map(id => CURATED_CAREER_PATHWAYS[id])
    .filter(Boolean);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-orange-200/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Brand Logo */}
          <button onClick={navigateToHome} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Compass className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                  PathFinder AI
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-300">
                  Multi-Stream Engine
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Universal Indian Educational & Career Pathway Matrix</p>
            </div>
          </button>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">

            <button onClick={() => setComparatorOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-400 shadow-sm transition-all cursor-pointer">
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden md:inline">Compare Streams</span>
            </button>

            <button onClick={() => setStreamQuizOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-400 shadow-sm transition-all cursor-pointer">
              <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden md:inline">Aptitude Quiz</span>
            </button>

            <button onClick={() => setCopilotOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 border border-orange-400/40 transition-all cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>AI Copilot</span>
            </button>

            <button onClick={() => setExportModalOpen(true)}
              className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-400 shadow-sm transition-all cursor-pointer">
              <FileDown className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {/* Live Bookmark Counter Button */}
            <button
              onClick={() => setBookmarkPanelOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-400 shadow-sm transition-all cursor-pointer"
              title={`${bookmarkedRoleIds.length} saved career pathways`}
            >
              {bookmarkedRoleIds.length > 0
                ? <BookmarkCheck className="w-3.5 h-3.5 text-orange-500 fill-orange-200" />
                : <Bookmark className="w-3.5 h-3.5 text-slate-400" />
              }
              <span className="font-bold text-orange-600">{bookmarkedRoleIds.length}</span>
            </button>

          </div>
        </div>
      </header>

      {/* Bookmarks Side Panel */}
      {bookmarkPanelOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/30 backdrop-blur-sm" onClick={() => setBookmarkPanelOpen(false)} />
          <div className="w-full max-w-sm bg-white border-l border-orange-200 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">

            <div className="p-4 border-b border-orange-100 bg-orange-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-orange-500" />
                <h2 className="font-bold text-slate-900 font-display">Saved Paths</h2>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                  {bookmarkedRoleIds.length}
                </span>
              </div>
              <button onClick={() => setBookmarkPanelOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-100 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {bookmarkedRoles.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <Bookmark className="w-12 h-12 text-orange-200 mx-auto" />
                  <p className="text-sm text-slate-500">No saved paths yet.</p>
                  <p className="text-xs text-slate-400">Click the bookmark icon on any career to save it here.</p>
                </div>
              ) : (
                bookmarkedRoles.map(role => (
                  <div key={role.id} className="p-3 rounded-2xl border border-orange-200 bg-orange-50 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">{role.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{role.shortDescription}</p>
                      </div>
                      <button onClick={() => toggleBookmark(role.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer shrink-0">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => { setActiveRoleById(role.id); navigateToPathway(); setBookmarkPanelOpen(false); }}
                      className="w-full py-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all">
                      <span>View Path</span><ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

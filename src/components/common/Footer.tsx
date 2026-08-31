import React from 'react';
import { Compass, Sparkles, BookOpen, Heart, Github } from 'lucide-react';
import { UNIVERSAL_DOMAINS } from '../../data/universalDomains';
import { usePathwayStore } from '../../store/pathwayStore';

export const Footer: React.FC = () => {
  const { setSelectedDomain } = usePathwayStore();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/80 mt-16 pt-12 pb-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base">
                PathFinder AI
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Universal intelligent multi-stream career pathway engine mapping every human passion through parallel post-10th educational routes across India.
            </p>
          </div>

          {/* Col 2: Universal Domains Catalog */}
          <div className="space-y-2 md:col-span-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              12 Universal Career Domains Mapped
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1">
              {UNIVERSAL_DOMAINS.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => {
                    setSelectedDomain(domain.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-[11px] text-slate-400 hover:text-indigo-300 transition-colors truncate cursor-pointer"
                >
                  • {domain.name.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Academic Gateways Mapped */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Gateways & Exams
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-400">
              <li>• Creative: FTII JET, NSD, KM Music</li>
              <li>• Design: NID DAT, NIFT, UCEED, CEED</li>
              <li>• Defense: NDA & NA Exam, 10+2 TES</li>
              <li>• Aviation: IGRUA CPL, IMU CET</li>
              <li>• STEM: JEE Adv, BITSAT, State EAMCET</li>
              <li>• Law: CLAT, AILET, SLAT</li>
              <li>• Polytechnic: POLYCET, ECET Lateral</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} PathFinder AI Engine • Multi-Stream Academic Matrix
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted for Indian Students with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Compass, Sparkles, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-orange-200/80 bg-white/90 backdrop-blur-md py-10 px-4 sm:px-6 lg:px-8 mt-12 text-slate-600">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Tier: Brand, Disclaimer & Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20 text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base text-slate-900">
                PathFinder AI
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                Multi-Stream Matrix
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              Empowering Indian students, defense aspirants, and parents to map non-linear educational routes across MPC, BiPC, MEC, HEC, and Polytechnic pathways for all passions, careers, and civil services.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Aligned with NEP 2020 Flexible Multi-Entry & Multi-Exit Framework</span>
            </div>
          </div>

          {/* Col 2: Exam Portals */}
          <div className="space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider">
              National Exam Portals
            </h5>
            <ul className="space-y-1.5 text-slate-600">
              <li><a href="https://upsc.gov.in" target="_blank" rel="noreferrer" className="hover:text-orange-600 flex items-center gap-1">UPSC Civil Services & NDA <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="https://joinindianarmy.nic.in" target="_blank" rel="noreferrer" className="hover:text-orange-600 flex items-center gap-1">Indian Army Agniveer & Officers <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="https://jeemain.nta.nic.in" target="_blank" rel="noreferrer" className="hover:text-orange-600 flex items-center gap-1">NTA JEE Main & Advanced <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="https://neet.nta.nic.in" target="_blank" rel="noreferrer" className="hover:text-orange-600 flex items-center gap-1">NEET UG (Medical / AFMC) <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
            </ul>
          </div>

          {/* Col 3: Stream Pathways */}
          <div className="space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider">
              Academic Streams
            </h5>
            <ul className="space-y-1.5 text-slate-600">
              <li>• MPC: Math, Physics, Chemistry & Defense</li>
              <li>• BiPC: Biology, Medicine, Veterinary</li>
              <li>• MEC/CEC: Commerce, CA, Investment</li>
              <li>• HEC: Civils, Law, Design & Cinema</li>
              <li>• Polytechnic: 3-Yr Diploma to B.Tech</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PathFinder AI. Built for India’s next generation of pioneers.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Powered by Intelligent NLP & Multi-Stream Educational Graph Synthesis</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

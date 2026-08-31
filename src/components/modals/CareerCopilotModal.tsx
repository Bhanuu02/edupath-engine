import React, { useState } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { GoogleGenAI } from '@google/genai';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Key, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const SAMPLE_PROMPTS = [
  'What if I do not qualify for the primary entrance exam?',
  'Can I switch into this career after a non-science degree?',
  'What are the most affordable government colleges for this path?',
  'How do I build a portfolio while preparing for 12th board exams?'
];

export const CareerCopilotModal: React.FC = () => {
  const { activeRole, selectedStream, isCopilotOpen, setCopilotOpen, geminiApiKey, setGeminiApiKey } = usePathwayStore();
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'assistant',
      text: `Hello! I am your AI Career Copilot for **${activeRole.title}** on the **${selectedStream} Stream Pathway**. Ask me anything about entrance cutoffs, backup plans, lateral switches, or syllabus preparation strategies!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(geminiApiKey);

  if (!isCopilotOpen) return null;

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInputText('');
    setIsLoading(true);

    try {
      let botReply = '';

      if (geminiApiKey && geminiApiKey.length > 10) {
        const ai = new GoogleGenAI({ apiKey: geminiApiKey });
        const systemPrompt = `You are the lead AI Career Counselor for Indian students navigating career pathways.
Current Context:
Target Career: ${activeRole.title} (${activeRole.domainName})
Active Post-10th Stream: ${selectedStream} Pathway
Stream Details: ${activeRole.streams[selectedStream]?.approachPhilosophy || ''}

Provide concise, highly actionable, empathetic, and factual Indian academic advice citing real entrance exams (e.g. JEE, NEET, CUET, CLAT, FTII, POLYCET, ECET), eligibility rules, backup lateral switches, and preparation timetables. Keep answers under 3 paragraphs with bullet points.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `${systemPrompt}\n\nStudent Question: ${textToSend}`
        });

        botReply = response.text || 'I analyzed your query based on current Indian academic regulations.';
      } else {
        // Intelligent built-in heuristic advisor responses
        const q = textToSend.toLowerCase();
        if (q.includes('fail') || q.includes('backup') || q.includes('qualify')) {
          botReply = `If you do not crack the top-tier entrance exam for **${activeRole.title}**, here are proven parallel backup routes:\n\n` +
            `1. **State University Entrance & Merit Lateral**: State CETs (EAMCET, MHCET, KCET) provide accredited degrees with identical industry eligibility.\n` +
            `2. **Lateral Bridge Gateways**: Consider a 3-Year Polytechnic Diploma -> ECET into 2nd-year B.Tech, or B.Sc/BCA -> NIMCET into MCA.\n` +
            `3. **Independent Portfolio Track**: Top tech and creative studios (gaming, VFX, coding, design) evaluate GitHub/Behance portfolios above institute names.`;
        } else if (q.includes('switch') || q.includes('non-science') || q.includes('arts')) {
          botReply = `Yes! **${activeRole.title}** can be entered from non-science streams:\n\n` +
            `• **NIOS Bridge**: Clear a single subject (Maths/Physics) via NIOS on-demand exams if needed for specific licenses (like DGCA Pilot CPL).\n` +
            `• **Post-Graduate Conversions**: Complete any bachelor’s degree (B.A./B.Com) and appear for FTII JET, 3-Year LL.B (CLAT PG / DU LL.B), or Master’s design exams (CEED / NID).`;
        } else if (q.includes('affordable') || q.includes('cost') || q.includes('fees')) {
          botReply = `The most cost-effective institutions for **${activeRole.title}** are:\n\n` +
            `• **Central & State Government Universities** (e.g., Delhi University, JNU, State IHMs, FTII, Central Polytechnics) where annual tuition is subsidized (< ₹10,000 to ₹50,000/yr).\n` +
            `• **Fully Funded Residencies**: National School of Drama (NSD) and Oberoi STEP provide 100% free tuition with monthly student stipends.`;
        } else {
          botReply = `For **${activeRole.title}** on the **${selectedStream} Stream**, the key is maintaining solid 10+2 board marks (> 60%) while dedicating 5-8 hours weekly to domain-specific skills (coding, sketching, theatre, sports, or creative portfolios). Would you like specific guidance on entrance exam syllabus weightages?`;
        }
      }

      const botMsg: ChatMessage = {
        sender: 'assistant',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (e) {
      console.error('Copilot error:', e);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: 'I ran into an issue connecting with live AI. Check your API key or try one of the popular roadmap prompts below!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-2xl h-[88vh] flex flex-col glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-display">
                  AI Career Copilot
                </h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {selectedStream} Mode
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Contextual advisory for <strong>{activeRole.title}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="p-2 rounded-xl text-slate-400 hover:text-indigo-300 bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
              title="Configure Gemini API Key"
            >
              <Key className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCopilotOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Optional Gemini API Key Drawer */}
        {showKeyInput && (
          <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2 text-xs">
            <input
              type="password"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="Paste Google Gemini API Key (optional for live AI synthesis)"
              className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 text-white border border-slate-700 text-xs focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={() => {
                setGeminiApiKey(tempApiKey);
                setShowKeyInput(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer"
            >
              Save Key
            </button>
          </div>
        )}

        {/* Chat Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-line text-xs sm:text-sm">
                  {msg.text}
                </div>
                <div className={`text-[10px] mt-1.5 ${msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-xl bg-purple-600/30 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-indigo-400 p-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>AI Advisor is analyzing Indian academic pathways...</span>
            </div>
          )}
        </div>

        {/* Quick Question Pills */}
        <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] text-slate-400 font-bold shrink-0 flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-amber-400" /> Suggestions:
          </span>
          {SAMPLE_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-indigo-600/20 hover:text-indigo-300 text-slate-300 border border-slate-700/60 whitespace-nowrap shrink-0 transition-all cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about entrance cutoffs, backup options, or preparation..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 text-white placeholder:text-slate-500 border border-slate-700 text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition-all cursor-pointer shadow-md shadow-indigo-600/25"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

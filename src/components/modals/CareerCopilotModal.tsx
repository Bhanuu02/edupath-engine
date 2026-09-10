import React, { useState } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Key, 
  HelpCircle,
  Lightbulb,
  CheckCircle2
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
  'What physical fitness tests or skills are needed before applying?'
];

export const CareerCopilotModal: React.FC = () => {
  const { activeRole, selectedStream, isCopilotOpen, setCopilotOpen, geminiApiKey, setGeminiApiKey } = usePathwayStore();
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'assistant',
      text: `Hello! I am your AI Career Copilot for **${activeRole.title}** on the **${selectedStream} Stream Pathway**.\n\nAsk me anything about entrance exam cutoffs, study strategies, physical fitness tests, lateral career switches, or fee structures!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(geminiApiKey || (import.meta as any).env?.VITE_GEMINI_API_KEY || '');

  if (!isCopilotOpen) return null;

  const currentKey = geminiApiKey || (import.meta as any).env?.VITE_GEMINI_API_KEY || '';

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

      // Build conversation context
      const chatHistory = messages
        .slice(-4)
        .map(m => `${m.sender === 'user' ? 'User' : 'Advisor'}: ${m.text}`)
        .join('\n');

      const stream = (activeRole.streams && (activeRole.streams[selectedStream] || activeRole.streams['MPC'] || Object.values(activeRole.streams)[0])) || {
        streamName: selectedStream,
        approachPhilosophy: 'Academic degree pathway',
        pros: ['Solid foundation'],
        milestones: [],
        lateralSwitches: [],
        salarySpectrumLpa: { entryMin: 4, entryMax: 10, experiencedPeak: 30 },
        metrics: { timeToFirstJobYears: 4 }
      };

      const systemPrompt = `You are the Lead Academic Architect & Career Counselor for the Indian National Career Engine.
Target Career Role: ${activeRole.title}
Domain: ${activeRole.domainName}
Active Stream: ${selectedStream} (${stream.streamName})
Degree/Branch Recommended: ${activeRole.recommendedDegreeBranch || 'Specialized Degree'}
Estimated Time to Job: ${stream.metrics?.timeToFirstJobYears || 4} Years
Salary Range: ₹${stream.salarySpectrumLpa?.entryMin || 4}L - ₹${stream.salarySpectrumLpa?.entryMax || 10}L LPA

Conversation History:
${chatHistory}
User: ${textToSend}

Instructions:
Provide a clear, empowering, and realistic answer in concise bullet points with Indian context (specific exams like JEE/NDA/NEET/CUET/GATE/UPSC, realistic cutoffs, physical fitness standards if applicable, top government/private institutions, backup lateral options, and immediate next steps).`;

      // 1. First try secure Serverless Proxy /api/chat (keeps GEMINI_API_KEY 100% private)
      try {
        const serverRes = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: textToSend,
            systemPrompt
          })
        });

        if (serverRes.ok) {
          const serverData = await serverRes.json();
          if (serverData.reply) {
            botReply = serverData.reply;
          }
        }
      } catch (proxyErr) {
        console.warn('Serverless proxy unavailable, checking client fallback:', proxyErr);
      }

      // 2. Client-side fallback if direct key is present in browser state
      if (!botReply && currentKey) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${currentKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: systemPrompt }] }],
                generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
              })
            }
          );

          if (res.ok) {
            const data = await res.json();
            botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
          } else {
            // Try Gemini 1.5 Flash fallback
            const res15 = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${currentKey}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ parts: [{ text: systemPrompt }] }],
                  generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
                })
              }
            );
            if (res15.ok) {
              const data15 = await res15.json();
              botReply = data15.candidates?.[0]?.content?.parts?.[0]?.text || '';
            }
          }
        } catch (apiErr) {
          console.warn('Gemini direct API call fallback:', apiErr);
        }
      }

      // 2. Intelligent Synthetic Fallback if API is unavailable
      if (!botReply) {
        const lower = textToSend.toLowerCase();

        if (lower.includes('exam') || lower.includes('cutoff') || lower.includes('prepare') || lower.includes('syllabus')) {
          botReply = `### Entrance Strategy for **${activeRole.title}** (${selectedStream}):\n\n` +
            `• **Primary Gateways**: ${stream.milestones[1]?.examGateways?.join(', ') || 'National / State Level Entrance Tests'}\n` +
            `• **Recommended Preparation Timeline**: Begin in Class 11 with 15-20 hours of weekly subject problem-solving and previous 5-year question papers.\n` +
            `• **Cutoff Benchmark**: Aim for top 10-15 percentile for premier government institutions; maintain minimum 60% board aggregate for eligibility.\n` +
            `• **Safety Net**: If entrance ranks vary, explore lateral entry or state university CUET counseling.`;
        } else if (lower.includes('switch') || lower.includes('non-science') || lower.includes('lateral') || lower.includes('arts')) {
          botReply = `### Lateral Flexibility & NEP 2020 Transition:\n\n` +
            `• **Can you switch?**: Yes! Under the National Education Policy, multi-disciplinary transitions are recognized.\n` +
            `• **Lateral Bridges**: ${stream.lateralSwitches?.map(s => `**${s.title}** (${s.bridgeExamOrMechanism})`).join('; ') || 'Post-graduate diplomas, open university certifications, and portfolio evaluation'}.\n` +
            `• **Industry Reality**: Modern employers and studios prioritize demonstrable portfolio projects, GitHub code, and internships over 12th stream choice.`;
        } else if (lower.includes('fitness') || lower.includes('physical') || lower.includes('soldier') || lower.includes('run')) {
          botReply = `### Physical Standards & Fitness Preparation:\n\n` +
            `• **Endurance Running**: Target 1.6 km in under 5 minutes 30 seconds for Group-1 maximum marks (60/60).\n` +
            `• **Bodyweight Strength**: 10 unassisted chin-ups/pull-ups (40 marks), 9-foot ditch jump, and balance beam.\n` +
            `• **Medical Checks**: Ensure eyesight 6/6 (with/without correction as per trade), zero knock-knees, flat-foot, or ear wax.\n` +
            `• **Routine**: Practice interval sprints 3 days/week and core bodyweight strength (pushups, planks, pull-ups).`;
        } else if (lower.includes('college') || lower.includes('fee') || lower.includes('affordable')) {
          botReply = `### Top Institutions & Cost Breakdown for **${activeRole.title}**:\n\n` +
            `• **Premier Government Options**: ${stream.milestones[2]?.recommendedInstitutions?.join(', ') || 'Central & State Government Universities'}\n` +
            `• **Estimated Investment**: ${stream.milestones[2]?.estimatedCostRange || 'Nominal Subsidized Fees'}\n` +
            `• **Scholarship Support**: Central Sector Scholarships, state fee reimbursement, and defense/merit waivers.`;
        } else {
          botReply = `### Strategic Guidance for **${activeRole.title}**:\n\n` +
            `• **Pathway Duration**: ~${stream.metrics.timeToFirstJobYears} years to first professional deployment.\n` +
            `• **Salary Trajectory**: Entry starts at ₹${stream.salarySpectrumLpa.entryMin}L - ₹${stream.salarySpectrumLpa.entryMax}L LPA, advancing to ₹${stream.salarySpectrumLpa.experiencedPeak}L+ with senior mastery.\n` +
            `• **Core Milestone Focus**: ${stream.pros[0] || 'Focus on foundational coursework and practical hands-on projects.'}\n` +
            `• **Next Action**: Review the milestone timeline below and register for upcoming entrance exam notification alerts.`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: 'Thank you for your question. You can explore the interactive milestones and lateral switches in the main roadmap view for step-by-step guidance.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-2xl h-[85vh] flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-white border border-white/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                AI Career Copilot
              </h3>
              <p className="text-xs text-orange-100">
                Live strategic advisor for {activeRole.title} ({selectedStream})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="px-2.5 py-1.5 rounded-xl text-xs text-orange-100 hover:text-white bg-white/15 hover:bg-white/25 transition-colors cursor-pointer flex items-center gap-1.5"
              title="Configure API Key"
            >
              <Key className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">API Key</span>
            </button>

            <button
              onClick={() => setCopilotOpen(false)}
              className="p-1.5 rounded-xl text-orange-100 hover:text-white bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Optional Gemini API Key Drawer */}
        {showKeyInput && (
          <div className="p-3 bg-orange-50 border-b border-orange-200 flex items-center gap-2 text-xs">
            <input
              type="text"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="Paste Google Gemini API Key"
              className="flex-1 px-3 py-1.5 rounded-lg bg-white border border-orange-300 text-slate-800 text-xs focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={() => {
                setGeminiApiKey(tempApiKey);
                setShowKeyInput(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold cursor-pointer"
            >
              Save Key
            </button>
          </div>
        )}

        {/* Chat Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm bg-stone-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-4 rounded-2xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-br-none shadow-md shadow-orange-500/20'
                    : 'bg-white text-slate-800 border border-orange-200/80 shadow-sm rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-line text-xs sm:text-sm space-y-2">
                  {msg.text}
                </div>
                <div className={`text-[10px] mt-2 ${msg.sender === 'user' ? 'text-orange-100' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-orange-600 p-2 bg-orange-50/80 rounded-xl border border-orange-200/50 w-fit">
              <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
              <span className="font-medium">AI Career Advisor is generating strategic guidance...</span>
            </div>
          )}
        </div>

        {/* Quick Question Pills */}
        <div className="px-4 py-2.5 bg-white border-t border-orange-100 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] text-slate-500 font-bold shrink-0 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Quick Topics:
          </span>
          {SAMPLE_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 hover:text-orange-700 text-slate-700 border border-orange-200/80 whitespace-nowrap shrink-0 transition-all cursor-pointer shadow-2xs font-medium"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-orange-100">
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
              placeholder="Ask about entrance cutoffs, backup options, physical fitness, or fee structures..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-stone-50 text-slate-900 placeholder:text-slate-400 border border-orange-200/80 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white disabled:opacity-40 transition-all cursor-pointer shadow-md shadow-orange-500/20 font-semibold flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Send</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

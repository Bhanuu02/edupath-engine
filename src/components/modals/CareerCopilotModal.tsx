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
      text: `Hello! I am your AI Career Copilot for **${activeRole.title}** on the **${selectedStream} Stream Pathway**. Ask me anything about entrance cutoffs, backup plans, physical fitness tests, lateral switches, or syllabus preparation strategies!`,
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

      if (geminiApiKey) {
        const prompt = `You are an expert Indian Career Counselor and Academic Strategist.
Target Career Role: ${activeRole.title} (${activeRole.domainName})
Active Stream: ${selectedStream}
User Question: "${textToSend}"

Provide a concise, practical, and empathetic answer (max 3-4 bullet points or short paragraphs). Mention specific Indian exam gateways, realistic cutoffs, lateral bridges, and actionable tips.`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { temperature: 0.7, maxOutputTokens: 600 }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        }
      }

      if (!botReply) {
        const stream = activeRole.streams[selectedStream] || Object.values(activeRole.streams)[0];
        const lower = textToSend.toLowerCase();

        if (lower.includes('exam') || lower.includes('cutoff') || lower.includes('prepare')) {
          botReply = `For **${activeRole.title}** in **${selectedStream}**, the primary gateway exams include ${stream.milestones[1]?.examGateways?.join(', ') || 'National / State level entrance tests'}. \n\n• **Strategy**: Focus on solving past 5-year question banks and maintaining minimum 60% board aggregate.\n• **Backup Plan**: If competitive rank is missed, consider lateral admission via ${selectedStream === 'MPC' ? 'Polytechnic Diploma (POLYCET -> ECET)' : 'State University CUET / Merit seats'}.`;
        } else if (lower.includes('switch') || lower.includes('non-science') || lower.includes('lateral')) {
          botReply = `Yes! NEP 2020 and modern industry allow lateral flexibility:\n\n• **Bridge Gateways**: ${stream.lateralSwitches?.map(s => s.title).join(', ') || 'Open university bridges and portfolio certifications'}.\n• **Key Advice**: Practical portfolio and domain certifications outweigh non-traditional degree backgrounds.`;
        } else {
          botReply = `Great question regarding **${activeRole.title}**! \n\n• **Duration & Trajectory**: Estimated ${stream.metrics.timeToFirstJobYears} years to first job.\n• **Expected Entry Salary**: ₹${stream.salarySpectrumLpa.entryMin}L - ₹${stream.salarySpectrumLpa.entryMax}L LPA with senior trajectory to ₹${stream.salarySpectrumLpa.experiencedPeak}L+.\n• **Recommended Focus**: ${stream.pros[0]}.`;
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
          text: 'Thank you for your question. As you prepare, prioritize mastering core milestone subjects and exploring lateral bridges if competitive cutoffs vary.',
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
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-white border border-white/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                AI Career Copilot
              </h3>
              <p className="text-xs text-orange-100">
                Live strategic counselor for {activeRole.title} ({selectedStream})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="p-1.5 rounded-xl text-orange-100 hover:text-white bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
              title="Add Gemini API Key for dynamic real-time AI"
            >
              <Key className="w-4 h-4" />
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
              type="password"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="Paste Google Gemini API Key (Optional)"
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
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-orange-500 text-white rounded-br-none shadow-md shadow-orange-500/20'
                    : 'bg-white text-slate-800 border border-orange-200/80 shadow-sm rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-line text-xs sm:text-sm">
                  {msg.text}
                </div>
                <div className={`text-[10px] mt-1.5 ${msg.sender === 'user' ? 'text-orange-100' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-orange-600 p-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>AI Advisor is analyzing Indian academic pathways...</span>
            </div>
          )}
        </div>

        {/* Quick Question Pills */}
        <div className="px-4 py-2 bg-white border-t border-orange-100 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] text-slate-500 font-bold shrink-0 flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-amber-500" /> Suggestions:
          </span>
          {SAMPLE_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-orange-50 hover:bg-orange-100 hover:text-orange-700 text-slate-700 border border-orange-200 whitespace-nowrap shrink-0 transition-all cursor-pointer"
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
              placeholder="Ask anything about entrance cutoffs, backup options, or physical fitness tests..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 text-slate-900 placeholder:text-slate-400 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-40 transition-all cursor-pointer shadow-md shadow-orange-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

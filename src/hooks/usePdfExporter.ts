import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { CareerRole, StreamType } from '../types/pathway';

export function usePdfExporter() {
  const [isExporting, setIsExporting] = useState(false);

  const exportElementToPdf = async (
    _elementId: string,
    role: CareerRole,
    stream: StreamType
  ) => {
    setIsExporting(true);
    try {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = 210;
      const margin = 15;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      const safeSplit = (text: string, maxWidth: number) =>
        doc.splitTextToSize(String(text || ''), maxWidth);

      const addText = (text: string, size: number, bold = false, color = '#1f2937') => {
        doc.setFontSize(size);
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        doc.setTextColor(color);
        const lines = safeSplit(text, contentWidth);
        const lineHeight = size * 0.45;
        if (y + lines.length * lineHeight > 278) { doc.addPage(); y = margin; }
        doc.text(lines, margin, y);
        y += lines.length * lineHeight + 2;
      };

      const addDivider = () => {
        doc.setDrawColor('#f97316');
        doc.setLineWidth(0.4);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
      };

      // ── Orange header bar ──
      doc.setFillColor('#f97316');
      doc.rect(0, 0, 210, 24, 'F');
      doc.setFontSize(15);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor('#ffffff');
      doc.text('PathFinder AI — Career Roadmap', margin, 11);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('Universal Indian Multi-Stream Educational Gateway', margin, 18);
      y = 32;

      // ── Role title ──
      addText(role.title, 20, true, '#1f2937');
      addText(role.domainName, 11, false, '#ea580c');
      y += 2;
      addDivider();

      addText('Overview', 12, true, '#ea580c');
      addText(role.shortDescription, 10, false, '#374151');
      y += 2;

      addText('Career Insight', 12, true, '#ea580c');
      addText(role.holisticInsight, 10, false, '#374151');
      y += 2;

      if (role.tags?.length) {
        addText('Tags', 11, true, '#ea580c');
        addText(role.tags.join(' · '), 10, false, '#374151');
        y += 2;
      }

      addDivider();

      // ── Selected stream ──
      const streamData = role.streams[stream];
      if (streamData) {
        addText(`Stream: ${streamData.streamName}`, 14, true, '#1f2937');
        addText(streamData.approachPhilosophy, 10, false, '#374151');
        y += 2;

        addText('Key Metrics', 11, true, '#ea580c');
        addText([
          `Time to First Job: ${streamData.metrics.timeToFirstJobYears} years`,
          `Financial Investment: ${String(streamData.metrics.financialInvestment).replace(/_/g, ' ')}`,
          `Competition Level: ${String(streamData.metrics.competitionLevel).replace(/_/g, ' ')}`,
          `Flexibility Score: ${streamData.metrics.flexibilityScore}/10`,
          `Entry Salary: ₹${streamData.salarySpectrumLpa.entryMin}L – ₹${streamData.salarySpectrumLpa.entryMax}L PA`,
          `5-Year Peak: ₹${streamData.salarySpectrumLpa.experiencedPeak}L PA`,
        ].join('\n'), 10, false, '#374151');
        y += 2;

        addText('Strengths', 11, true, '#ea580c');
        addText(streamData.pros.map((p, i) => `${i + 1}. ${p}`).join('\n'), 9, false, '#374151');
        y += 2;

        addText('Trade-offs', 11, true, '#ea580c');
        addText(streamData.cons.map((c, i) => `${i + 1}. ${c}`).join('\n'), 9, false, '#374151');
        y += 2;

        addText('Entry Job Roles', 11, true, '#ea580c');
        addText(streamData.entryJobRoles.join(', '), 10, false, '#374151');
        y += 2;

        addText('5-Year Trajectory', 11, true, '#ea580c');
        addText(streamData.fiveYearTrajectory, 10, false, '#374151');
        y += 2;

        addDivider();

        // ── Milestones ──
        addText('Milestone Roadmap', 13, true, '#1f2937');
        y += 1;
        (streamData.milestones || []).forEach((m, idx) => {
          if (y > 265) { doc.addPage(); y = margin; }
          addText(`Stage ${idx + 1}: ${m.title}`, 11, true, '#374151');
          addText(m.description, 9, false, '#6b7280');
          if (m.keyActionTip) addText(`💡 Tip: ${m.keyActionTip}`, 9, false, '#ea580c');
          if (m.estimatedCostRange) addText(`Cost: ${m.estimatedCostRange}`, 9, false, '#374151');
          y += 2;
        });

        // Lateral switches
        if (streamData.lateralSwitches?.length) {
          addDivider();
          addText('Lateral Switch Opportunities', 12, true, '#1f2937');
          streamData.lateralSwitches.forEach(ls => {
            if (y > 270) { doc.addPage(); y = margin; }
            addText(`• ${ls.title}`, 10, true, '#374151');
            addText(ls.description, 9, false, '#6b7280');
            y += 1;
          });
        }
      }

      // ── Page footers ──
      const totalPages = (doc as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor('#9ca3af');
        doc.text(
          `PathFinder AI  ·  ${role.title}  ·  Page ${i} of ${totalPages}`,
          margin, 290
        );
      }

      doc.save(`${role.slug}_${stream}_roadmap_pathfinder.pdf`);
    } catch (e) {
      console.error('PDF export failed:', e);
    } finally {
      setIsExporting(false);
    }
  };

  return { exportElementToPdf, isExporting };
}

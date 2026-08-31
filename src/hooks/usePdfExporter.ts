import { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CareerRole, StreamType } from '../types/pathway';

export function usePdfExporter() {
  const [isExporting, setIsExporting] = useState(false);

  const exportElementToPdf = async (
    elementId: string,
    role: CareerRole,
    stream: StreamType
  ) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id #${elementId} not found for export.`);
      return;
    }

    setIsExporting(true);

    try {
      // Temporarily expand scroll constraints for complete screenshot
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#020617',
        logging: false,
        windowWidth: 1440
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }

      const fileName = `${role.slug}_${stream}_roadmap_pathfinder.pdf`;
      pdf.save(fileName);
    } catch (e) {
      console.error('PDF export failed:', e);
    } finally {
      setIsExporting(false);
    }
  };

  return {
    exportElementToPdf,
    isExporting
  };
}

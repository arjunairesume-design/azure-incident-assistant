import jsPDF from 'jspdf';

export default function ExportPdfButton({ data }) {
    console.log('PDF DATA:', data);
  const exportPdf = () => {
    if (!data) {
      alert('No analysis found');
      return;
    }

    const pdf = new jsPDF();
    const currentDate = new Date().toLocaleString();

    let y = 20;

    pdf.setFontSize(18);
    pdf.text('Azure Incident Assistant', 15, y);

    y += 10;

    pdf.setFontSize(12);
    pdf.text(
      'AI-Powered Root Cause Analysis Report',
      15,
      y
    );

    y += 10;

    pdf.setFontSize(10);
    pdf.text(
      'Report ID: RCA-' + Date.now(),
      15,
      y
    );

    y += 7;

    pdf.text(
      'Generated On: ' + currentDate,
      15,
      y
    );

    y += 15;

    const addSection = (title, value) => {
      if (!value) return;

      if (y > 260) {
        pdf.addPage();
        y = 20;
      }

      pdf.setFontSize(12);
      pdf.text(title, 15, y);

      y += 7;

      pdf.setFontSize(10);

      const lines = pdf.splitTextToSize(
        String(value),
        180
      );

      pdf.text(lines, 15, y);

      y += lines.length * 6 + 8;
    };

    addSection('Severity', data.severity);

    addSection(
      'Recommended Team',
      data.recommendedTeam
    );

    addSection(
      'Root Cause Analysis',
      data.likelyRootCause ||
        data.mostLikelyCause
    );

    if (data.fiveWhys?.length) {
      addSection(
        '5 Whys Analysis',
        data.fiveWhys.join('\n\n')
      );
    }

    addSection(
      'Reasoning',
      data.reasoning
    );

    addSection(
      'Business Impact',
      data.businessImpact
    );

    addSection(
      'Recommended Fix',
      data.recommendedFix
    );

    addSection(
      'Permanent Fix',
      data.permanentFix
    );

    addSection(
      'Preventive Measure',
      data.preventiveMeasure
    );

    addSection(
      'Escalation Path',
      data.escalationPath
    );

    pdf.save('Azure-Incident-RCA.pdf');
  };

  return (
    <button
      onClick={exportPdf}
      className="btn-primary"
    >
      Export RCA PDF
    </button>
  );
}
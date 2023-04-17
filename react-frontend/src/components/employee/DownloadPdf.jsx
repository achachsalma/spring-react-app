import React from 'react'
import { jsPDF } from "jspdf";

export default function DownloadPdf() {
    const handleDownloadPdf = async () => {
        var doc = new jsPDF('p', 'pt');
      
        doc.text(80, 160, 'this is list of paid products:')
        doc.text(120, 180, '-fruits')
        doc.text(120, 200, '-vegetables')
        doc.text(120, 220, '-juices')
        doc.addFont('helvetica', 'normal')
     
        
        doc.save('listProducts.pdf')
    };
    
  return (
    <button className="btn btn-info" onClick={handleDownloadPdf}>download PDF</button>
  )
}

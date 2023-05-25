import React from 'react';
import { render } from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Report from './Report';

const pdfview = () => (
  <PDFViewer>
    <Report />
  </PDFViewer>
);

render(<pdfview  />, document.getElementById('root'));

export default pdfview;
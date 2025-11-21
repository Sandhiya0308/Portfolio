import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResumeComponent {

  experiences = [
    {
      company: 'BGR NEO Limited',
      role: 'Full Stack Developer',
      duration: '2025 - Present',
      description:
        'Enhanced automation workflows and developed ERP functionalities using Angular, ReactJS, and MySQL.'
    },
    {
      company: 'Indus Novateur Soft Tech',
      role: 'Full Stack Developer',
      duration: '2023 - 2024',
      description:
        'Built modular SPAs with Angular Material and RESTful API integration.'
    }
  ];

  skills = [
    { name: 'JavaScript' },
    { name: 'Angular' },
    { name: 'ReactJS' },
    { name: 'Node.js' },
    { name: 'Bootstrap' },
    { name: 'MySQL / MSSQL' }
  ];

  downloadPDF() {
    const element = document.getElementById('resume-content');
    if (!element) return;

    html2canvas(element, { scale: 3 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Sandhiya_S_Resume.pdf');
    });
  }
}

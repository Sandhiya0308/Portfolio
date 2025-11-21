import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {

  projects = [
    {
      name: 'QIMC(Qatar Industrial Manufacturing & Co.) ESS',
      image: 'assets/images/QIMC.png',
      technologyUsed: 'HTML, CSS, Bootstrap, JavaScript, Angular, Node.js, HANA DB',
      description: [
        'Developed a modular, single-page web application in Angular with responsive design.',
        'Created a reusable component library using Angular Material to reduce development time.',
        'Integrated third-party APIs for real-time data exchange and updates.',
        'Built custom directives to manipulate DOM elements and extend functionality.',
        'Streamlined HR processes aligned with QIMC HR policy and ESS vision.',
        'Developed a data visualization dashboard using Bootstrap and Angular for real-time analytics.'
      ]
    },
    {
      name: 'Web-based Classic Polo ERP Recreation',
      image: 'assets/images/ClassicPolo.png',
      technologyUsed: 'HTML, CSS, Bootstrap, Javascript, Angular, Node.js, SQL',
      description: [
        'Developed an interactive data visualization dashboard using Bootstrap and Angular to display real-time data.',
        'Recreating the ERP system using modern web technologies, enhancing user experience, and improving performance.',
        'A cutting-edge ERP system offering a user-friendly interface, enhanced functionality, and robust security, leveraging the strengths of modern web technologies.'
      ]
    },
    {
      name: 'QUIN-WAN CRM Application',
      image: 'assets/images/Qinwan.png',
      technologyUsed: 'PHP, MS SQL, j Query, Ajax supported for the application development',
      description: [
        'Developed custom services to manage application state and communicate with back-end API',
        'Supported QUIN-WAN, a comprehensive CRM application, to streamline sales tracking, marketing automation, and customer insights.',
        'Successfully implemented both front-end and back-end functionalities, Enhanced sales efficiency, improved marketing effectiveness, and deeper customer understanding, driving business growth and revenue increase.'
      ]
    },
    {
      name: 'Design Department Check List System',
      image: 'assets/images/BGRNEO.png',
      technologyUsed: 'HTML, bootstrap, Java-script',
      description: [
        'Developed a custom front-end application using pure JavaScript to improve efficiency and usability within design workflows.',
        'Implemented dynamic data validation and state management logic to streamline design check processes for both Mechanical and Electrical teams.',
        'Engineered a structured Check List system to manage material information across multiple stages, including Concept Design, DAP submission, Quality Assurance, Process Standardization, Self & Peer Verification, Indent Creation, and Material Release.',
        'Focused on creating a lightweight, dependency-free solution with optimized DOM manipulation and reusable modular components for maintainability and scalability'
      ]
    },
    {
      name: 'Design Mechanical Time Plan System',
      image: 'assets/images/TimePlan.png',
      technologyUsed: 'HTML, bootstrap, AngularJS',
      description: [
        'Developed a front-end time planning tool for the Design Mechanical team to track and manage timelines for 3D and 2D model development.',
        'Implemented a dynamic date calculation feature based on assigned mandays (e.g.,automatically computing end dates based on the number of working days).',
        'Integrated row addition and deletion functionalities for flexible data entry and realtime updates.',
        'Utilized JavaScript-based popup and alert messages to enhance user interaction and validation feedback.',
        'Built with a focus on usability, automation, and accurate time estimation to improve project planning efficiency.'
      ]
    },
    {
      name: 'BGR NEO ERP Application',
      image: 'assets/images/BGRNEO.png',
      technologyUsed: 'HTML, Ant design, ReactJs, Java, MySQL supported for the development',
      description: [
        'Developed custom ReactJS services to efficiently manage application state and ensure seamless communication with back-end APIs.',
        'Supported and enhanced BGR NEO, an integrated ERP system designed to streamline automotive business processes.',
        'Successfully implemented end-to-end functionalities across both front-end and back-end modules.',
        'Enhanced automation workflows for key ERP modules, including Cost Allocation, Station & Sub-Assembly Division, Indent Creation, PJS, Purchase Order (PO), Material Inward, Goods Receipt Note (GRN), PRA, Debit Note, Tally Integration, and the Approval Process.'
      ]
    }
  ];

}

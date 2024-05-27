import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Grassroots Leader @ People Association',
    abbr: 'GRL@PA',
    year: 2023,
    description: 'Develop, support, and Maintenance of a PA Web Management System.',
    tools: ['.NET Core', 'PostgreSQL', 'AWS', 'Aspose'],
    role: ['Back End Developer'],
    code: '',
    demo: '',
    image: crefin,
    customer: 'Singapore Government Agency',
    endCustomer: 'People Association Singapore Government',
  },
  {
    id: 2,
    name: 'Republic Polytechnic Connect',
    abbr: 'RPConnect',
    year: 2023,
    description: 'Maintenance, bug fixing, and tech migration from .NET 4 to .NET 6 for RPConnect System.',
    tools: ['C#', '.NET'],
    role: ['Back End Developer'],
    code: '',
    demo: '',
    image: travel,
    customer: 'Singapore Government Agency',
    endCustomer: 'GovTech Singapore Government',
  },
  {
    id: 3,
    name: 'Billing and Validation Tool',
    abbr: 'BVAT',
    year: 2023,
    description: 'Maintenance and bug fixing Billing Report System.',
    tools: ['C#', '.NET', 'Cronjob'],
    code: '',
    role: ['Back End Developer'],
    demo: '',
    image: realEstate,
    customer: 'Singapore Government Agency',
    endCustomer: 'GovTech Singapore Government',
  },
  {
    id: 4,
    name: 'Smart Integrated Security System',
    abbr: 'SISS',
    year: 2022,
    description: 'Developing a Smart Integrated Security System includes intruder detection, smoke detection, security personnel tracking, guest management, patrol management, etc. to be applied in several prisons through Direktorat Jendral Pemasyarakatan.',
    tools: [
      'VueJS',
      'Vite',
      'Mqtt Mosquitto',
      'ExpressJS',
      'Prisma ORM',
      'PostgreSQL',
    ],
    code: '',
    demo: '',
    image: ayla,
    role: ['Lead Back End Developer', 'Front End Developer'],
    customer: 'Pindad',
    endCustomer: 'Direktorat Jendral Pemasyarakatan',
  },
  {
    id: 5,
    name: 'Production Management System - Augmented Reality',
    abbr: 'PMS AR',
    year: 2022,
    description: 'Develop Augmented Reality application with socket.io to provide production data of machines in real time.',
    tools: ['Unity', 'C#', 'socket.io', 'ExpressJS'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Unity Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 6,
    name: 'E-Procurement',
    abbr: 'E-Proc',
    year: 2021,
    description: 'Develop vendor management system and tender management system.',
    tools: ['ReactJS', 'React Suite', 'NestJS', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Lead Front End Developer', 'Backend Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 7,
    name: 'Military Vehicle Design Competition Website',
    abbr: 'MVDC',
    year: 2021,
    description: 'Develop Competition for Military Vehicle Design Website.',
    tools: ['PHP', 'Codeigniter', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Software Engineer'],
    customer: 'Pindad Indonesia',
    endCustomer: 'Ministry of Defence',
  },
  {
    id: 8,
    name: 'Production Monitoring System for Ammunition Small Caliber',
    abbr: 'PMS',
    year: 2020,
    description: 'Develop automation system for ammunition production in any line production.',
    tools: [
      'Python',
      'React Native',
      'Expo',
      'VueJS',
      'Vuetify',
      'ExpressJS',
      'PostgreSQL',
    ],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 9,
    name: 'IT Dashboard',
    abbr: 'IT Dashboard',
    year: 2020,
    description: 'Develop Dashboard related to IT for Director of Technology.',
    tools: ['PHP', 'VueJS', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 10,
    name: 'Face Recognition in IP Cam',
    abbr: 'FR-IPCam',
    year: 2020,
    description: 'Develop Face Recognition in CCTV with accuracy > 80%.',
    tools: ['Python', 'OpenCV', 'TensorFlow', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Software Engineer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 11,
    name: 'Form Pindad (From Lime Survey)',
    abbr: 'Form-Pindad',
    year: 2019,
    description: 'Install and modify from LimeSurvey to compatible for company needs.',
    tools: ['PHP', 'CakePHP', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Software Engineer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 12,
    name: 'Human Resources Information System (Absence/Leave Management, Personal Data Management) for Pindad Hospital',
    abbr: 'HRIS-PMU',
    year: 2019,
    description: 'Develop Human Resources Information System for Pindad Hospital.',
    tools: ['PHP', 'Codeigniter', 'CronJob', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Software Engineer'],
    customer: 'Pindad Indonesia',
    endCustomer: 'Pindad Medika Utama',
  },
  {
    id: 13,
    name: 'E-Office Pindad',
    abbr: 'E-Office',
    year: 2019,
    description: 'Develop Mail web app to manage administration activity such as delegation, disposition, in-out mail, internal-external mail, coordination mail with additional digital signature and office editor built-in.',
    tools: ['PHP', 'Codeigniter', 'Onlyoffice', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 14,
    name: 'E-Filing with Digital Signature',
    abbr: 'E-Filing-DSign',
    year: 2019,
    description: 'Develop Human Resources Information System for Pindad Hospital.',
    tools: ['PHP', 'Codeigniter', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 15,
    name: 'E-Filing for PTPN VII',
    abbr: 'E-Filing-PTPNVII',
    year: 2019,
    description: 'Develop Mail web app to manage administration activity such as delegation, disposition, in-out mail, internal-external mail, coordination mail and customized for company needs and business process.',
    tools: ['PHP', 'Codeigniter', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: 'PTPN VII',
  },
  {
    id: 16,
    name: 'E-Filing',
    abbr: 'E-Filing',
    year: 2018,
    description: 'Develop Mail web app to manage administration activity such as delegation, disposition, in-out mail, internal-external mail, coordination mail.',
    tools: ['PHP', 'Codeigniter', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Software Engineer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 17,
    name: 'Prakerin Pindad (Internship Program and On The Job Training Application)',
    abbr: 'Prakerin',
    year: 2018,
    description: 'Develop web app to register, monitor, and manage employee from Internship program and On The Job Training.',
    tools: ['PHP', 'HTML', 'MySQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 18,
    name: 'Performance Management',
    abbr: 'PM',
    year: 2017,
    description: 'Develop System for monitor and manage employee performance based on Indicator defined by company per periodic.',
    tools: ['PHP', 'Codeigniter', 'HTML', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 19,
    name: 'Employee Self Service',
    abbr: 'ESS',
    year: 2017,
    description: 'Develop system for monitor and manage employee personal data to serve a real time data.',
    tools: ['PHP', 'Codeigniter', 'HTML', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 20,
    name: 'Human Resource Information Systems (Absence/Leave Management, Payroll Management, Personal Data Management)',
    abbr: 'HRIS',
    year: 2016,
    description: 'Develop Human Resources Information System for company inspired HR system in SAP.',
    tools: ['PHP', 'Codeigniter', 'HTML', 'CronJob', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'Pindad Indonesia',
    endCustomer: '',
  },
  {
    id: 21,
    name: 'B2B Booking Tools in Opsigo',
    abbr: 'Opsigo',
    year: 2015,
    description: 'Develop system to manage all booking travel services in many vendor such as Antavaya, Bayu Buana, Golden Rama, etc.',
    tools: ['C#', '.NET', 'OracleDB'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: '',
    endCustomer: 'PT Citilink Indonesia',
  },
  {
    id: 22,
    name: 'Member Bonus Calculation in the Multi Level Management company - Desktop Based System',
    abbr: 'MLM-Bonus',
    year: 2015,
    description: 'Develop system to calculate member bonus in MultiLevel schema and optimization query calculation.',
    tools: ['Java', 'Swing', 'SQLServer'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: '',
    endCustomer: 'PT Savero Badam Pertiwi',
  },
  {
    id: 23,
    name: 'Booking Assets Management System',
    abbr: 'BAMS',
    year: 2015,
    description: 'Develop product ready to sell, web based application to manage, book, and supply assets and services.',
    tools: ['PHP', 'JQuery', 'Codeigniter', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer', 'System Analyst'],
    customer: '',
    endCustomer: 'PT Bee Solution Partners',
  },
  {
    id: 24,
    name: 'New Factory Isuzu Astra Motor Indonesia',
    abbr: 'IAM',
    year: 2014,
    description: 'Develop a web based system for main factory and new factory to control, monitor and report all activities including distribution to the main dealer in Indonesia.',
    tools: ['C#', 'ASP .NET', 'CakePHP', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: 'PT Fujitsu Indonesia',
    endCustomer: 'Isuzu Astra Motor Indonesia',
  },
  {
    id: 24,
    name: 'Production Control System of Hino Motors Manufacturing Indonesia',
    abbr: 'PMCS-HMMI',
    year: 2014,
    description: 'Develop web based application to control and monitor the production system.',
    tools: ['C#', '.NET', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: 'PT Fujitsu Indonesia',
    endCustomer: 'Hino Motors Manufacturing Indonesia',
  },
  {
    id: 25,
    name: 'Distribution and Firm Order System of Toyota Astra Motor Indonesia',
    abbr: 'DOS-FOS-TAMI',
    year: 2013,
    description: 'Develop web based application to monitor, manage, reporting all order and distribution product activities.',
    tools: ['Java', 'SPRING', 'OracleDB'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: 'PT Fujitsu Indonesia',
    endCustomer: 'Toyota Astra Motor Indonesia',
  },
  {
    id: 26,
    name: 'Disaster Management Information System of BPBD DKI Jakarta',
    abbr: 'DMIS-BPBDDKI',
    year: 2013,
    description: 'Develop Portal web use PHP and CodeIgniter synced with a Web app disaster management information system that used .NET.',
    tools: ['C#', '.NET', 'SQLServer', 'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Full Stack Developer'],
    customer: 'PT Fujitsu Indonesia',
    endCustomer: 'BPBD DKI Jakarta',
  },
  {
    id: 27,
    name: 'SMS Scheduler Mobile Application',
    abbr: 'SMSScheduler',
    year: 2013,
    description: 'Develop mobile application to send message such as birthday message, anniversary message connected with mobile calendar.',
    tools: ['Android', 'SQLite'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: '',
    endCustomer: '',
  },
  {
    id: 28,
    name: 'Telkom Wallet Prototype',
    abbr: 'Telkom_Wallet',
    year: 2012,
    description: 'Develop E-Wallet designed by Telkom to save, send, pay our money in the app connected with other app.',
    tools: ['Tabris'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: '',
    endCustomer: 'R&D Telkom Indonesia',
  },
  {
    id: 29,
    name: 'Movie Booking System Mobile Application',
    abbr: 'Movie_Booking_System_Mobile_Application',
    year: 2012,
    description: 'Develop Online Movie Booking include choose movie, theatre, and seat.',
    tools: ['Android', 'PhoneGap'],
    code: '',
    demo: '',
    image: ayla,
    role: ['Programmer'],
    customer: '',
    endCustomer: '',
  },
];

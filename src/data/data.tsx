import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import testimonialImage from '../images/nature.jpg';
import profilepic from '../images/New.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage1 from '../images/portfolio/restaurant-review.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Matthew Reiley',
  description: "Portfoio Site made by Matthew Reiley",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Matthew Reiley.`,
  description: (
    <>
      <div className="terminal-loader relative">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        
        <div className="absolute left-0">
          <span className='left-0 absolute top-6' id='spam'>{'>>'}</span>
          <div className='text'>Welcome to my website...</div>
          
        </div>
        
      </div>


      <p className="prose-sm text-dark-200 sm:prose-base lg:prose-lg">
        I'm a Bay Area based <strong className="text-dark-100">Full Stack Web Developer</strong>,
        helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-dark-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me coaching and playing <strong className="text-dark-100">Baseball</strong>,
        plucking my <strong className="text-dark-100">Guitar</strong>, or exploring the always beautiful{' '}
        <strong className="text-dark-100">Bay Area</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume%20Full%20Stack%20Developer.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Matthew Reiley, but you can call me Matt.  
    Born and raised in the Bay Area, I specialize in web development with a strong foundation in both frontend and backend technologies.  
    My expertise spans across building intuitive user interfaces, creating efficient database structures, and ensuring secure, scalable web solutions.  
    I have a deep understanding of modern programming practices, performance optimization, and responsive design principles to deliver seamless user experiences.  
    My goal is to combine clean design with robust functionality to create websites that are fast, accessible, and user-friendly.  
    Have an idea you want to bring to life? Let’s connect.`,
  aboutItems: [
    {label: 'Location', text: 'San Carlos, CA', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Interests', text: 'Baseball, Flying Planes', Icon: SparklesIcon},
    {label: 'Study', text: 'San Jose State University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Swift',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 5,
      },
    ],
  },
  {
    name: 'UI/UX',
    skills: [
      {
        name: 'Adobe XD',
        level: 7,
      },
      {
        name: 'Figma',
        level: 7,
      },
      {
        name: 'Blender',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SecureChat: End-to-End Encrypted Web Chat Application',
    description: 'SecureChat is a real-time web chat application built with Node.js, React, and Socket.IO. It features wallet-based authentication, client-side RSA-OAEP key management, AES-GCM message encryption, dynamic key rotation, and seamless real-time messaging—ensuring that only intended recipients can read your conversations.',
    url: 'https://project-steps.vercel.app/posts/securechat-a-node-js-and-react-chat-app-with-end-to-end-encryption',
    image: porfolioImage13,
  },

  {
    title: 'Inventory Management System',
    description: 'A system to make sure inventory is being properly tracked and has meaningful display data using Nestjs as a backend and Nextjs as a frontend',
    url: 'https://project-steps.vercel.app/posts/building-inventory-management-nestjs-nextjs',
    image: porfolioImage4,
  },
  {
    title: 'News Summarization Web App',
    description: 'A tool designed to simplify the process of consuming news. It reduces lengthy news articles into concise summaries, saving users time while ensuring they stay informed about critical events.',
    url: 'https://project-steps.vercel.app/posts/news-summarization-web-app',
    image: porfolioImage2,
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management application built using Flask for the backend and React for the frontend, featuring secure authentication and robust task tracking.',
    url: 'https://project-steps.vercel.app/posts/python-full-stack-task-management-application',
    image: porfolioImage5,
  },
  {
    title: 'Building a Scalable Inventory Management System with NestJS and Kubernetes',
    description: 'I built a scalable inventory management system using NestJS for the backend and deployed it on Kubernetes. The project features a RESTful API, integrates with MongoDB, and utilizes Docker for containerization, showcasing my cloud-native development skills.',
    url: 'https://project-steps.vercel.app/posts/building-a-scalable-inventory-management-system-with-nestjs-and-kubernetes',
    image: porfolioImage8,
  },
  {
    title: 'Block The Vote Web3 voting list',
    description: 'Web3 Voting system designed to create a fair place to vote on various items that pertain to the group.',
    url: 'https://project-steps.vercel.app/posts/block-the-vote/',
    image: porfolioImage3,
  },
  {
    title: 'Full-Stack Flask Web Application with Redis and Nginx',
    description: 'A Flask web app with Redis for session management and Nginx as a reverse proxy, featuring a calculator for arithmetic and graphing variable equations.',
    url: 'https://project-steps.vercel.app/posts/full-stack-flask-web-application-with-redis-and-nginx',
    image: porfolioImage7,
  },
  {
    title: 'Restaurant Review',
    description: 'Mock Yelp like review site using ejs and express.',
    url: 'https://project-steps.vercel.app/posts/restaurant-review',
    image: porfolioImage1,
  },
  {
    title: 'MatchCraft: AI-Powered Resume & Job Matching Web App',
    description: 'MatchCraft is a full-stack web application that analyzes your resume against a job description to calculate a match score, highlight matched and missing keywords, and generate a tailored AI-powered cover letter to improve your application.',
    url: 'https://project-steps-pdam08uei-thethickinnchickins-projects.vercel.app/posts/matchcraft-ai-resume-and-job-description-optimizer',
    image: porfolioImage12,
  },
  {
    title: 'Golang Login System',
    description: 'Authentication system made with GoLang',
    url: 'https://project-steps.vercel.app/posts/go-login',
    image: porfolioImage6,
  },
  {
    title: 'Mobile Movie Snack Ordering App: Movie-GOers UI/UX Case Study',
    description: 'The case study here shows my process to create an app that would make ordering at the movies accessible and easy to understand to new users.',
    url: 'https://mattreileydevelope.wixsite.com/mattux/movie-goers',
    image: porfolioImage11,
  },





  {
    title: 'Trash Day App UI/UX Case Study',
    description: 'The case study here shows my process to design an app that will allow for those who need help taking out their trash to have someone come at a specific time and date and take it out for them.',
    url: 'https://mattreileydevelope.wixsite.com/mattux/trash-day-1',
    image: porfolioImage9,
  },

  {
    title: 'Coffee Ecommerce Site UI/UX Case Study',
    description: 'The case study here shows my process to design a Matt’s Coffee House website to be user friendly by providing clear navigation and offering a fast checkout process.',
    url: 'https://mattreileydevelope.wixsite.com/mattux/matt-s-coffee-house-1',
    image: porfolioImage10,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023',
    location: 'San Jose State University - Computer Science',
    title: "Bachelor's of Arts",
    content: (
      <p>
        My psychology degree equipped me with a deep understanding of human behavior, cognitive processes, and emotional development. 
        I developed strong skills in research methods, data analysis, and critical thinking, as well as the ability to apply psychological principles 
        in real-world contexts. This foundation allows me to approach problems with empathy, analytical rigor, and an evidence-based mindset.
      </p>
    ),

  }
];

// export const experience: TimelineItem[] = [
//   {
//     date: 'March 2010 - Present',
//     location: 'Awesome Development Company',
//     title: 'Senior UX Engineer',
//     content: (
//       <p>
//         Describe work, special projects, notable achievements, what technologies you have been working with, and
//         anything else that would be useful for an employer to know.
//       </p>
//     ),
//   },
//   {
//     date: 'March 2007 - February 2010',
//     location: 'Garage Startup Studio',
//     title: 'Junior bug fixer',
//     content: (
//       <p>
//         Describe work, special projects, notable achievements, what technologies you have been working with, and
//         anything else that would be useful for an employer to know.
//       </p>
//     ),
//   },
// ];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Joseph Campbell',
      text: 'Computers are like Old Testament gods; lots of rules and no mercy.',
    },
    {
      name: 'Larry Niven',
      text: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    },
    {
      name: 'Alan Turing',
      text: 'Those who can imagine anything, can create the impossible.'
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Message Me Here',
  items: [
    {
      type: ContactType.Email,
      text: 'mattreileydeveloper@gmail.com',
      href: 'mailto:mattreileydeveloper@gmail.co',
    },
    {
      type: ContactType.Location,
      text: 'San Carlos CA, USA',
      href: 'https://maps.app.goo.gl/x8XNEQx9ZAQk5tcA9',
    },
    {
      type: ContactType.Github,
      text: 'mreiley',
      href: 'https://github.com/Thethickinnchickin',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Thethickinnchickin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/matt-reiley/'},
];

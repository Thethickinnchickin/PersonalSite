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
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage1 from '../images/portfolio/restaurant-review.png';
import profilepic from '../images/New.png';
import testimonialImage from '../images/testimonial.webp';
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
  Testimonials: 'quotes',
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
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bay Area based <strong className="text-stone-100">Full Stack Web Developer</strong>,
        helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me coaching and playing <strong className="text-stone-100">Baseball</strong>,
        plucking my <strong className="text-stone-100">Guitar</strong>, or exploring the always beautiful{' '}
        <strong className="text-stone-100">Bay Area</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/AIGame.pdf',
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
  Born and raised in the Bay Area, I have been honing in my skills as a web developer from designing databases to building frontend designs. I have done it all.
  For the past 7 years, I have been honing my skills in programming and specifically web development. Beginning with making simple games like Tetris using JavaScript, all the way to creating fully functional e-commerce sites with top-notch security.
  My goal is to make user-friendly websites that provide pain-free experiences.
  Have an interesting project? Let's talk.`,
  aboutItems: [
    {label: 'Location', text: 'San Carlos, CA', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
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
        level: 4,
      },
      {
        name: 'Flutter',
        level: 3,
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
    title: 'Restaurant Review',
    description: 'Mock Yelp like review site using ejs and express.',
    url: 'https://restaurant-review-bus9t1ipr-thethickinnchickin.vercel.app/restaurants',
    image: porfolioImage1,
  },

  {
    title: 'Block The Vote Web3 voting list',
    description: 'Web3 Voting system designed to create a fair place to vote on various items that pertain to the group.',
    url: 'https://block-the-vote-front.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Mobile Movie Snack Ordering App: Movie-GOers UI/UX Case Study',
    description: 'The case study here shows my process to create an app that would make ordering at the movies accessible and easy to understand to new users.',
    url: 'https://mattreileydevelope.wixsite.com/mattux/movie-goers',
    image: porfolioImage11,
  },
  {
    title: 'Browser Calculator',
    description: 'Calculator To do small arithmatic and also graph variable equations',
    url: 'https://calculator-zeta-neon.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Pnyx Betting',
    description: 'A friendly betting site where you can compete against friends without having to put any money down.',
    url: 'https://pnyx-orcin.vercel.app/',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  {
    title: 'Trash Day App UI/UX Case Study',
    description: 'The case study here shows my process to design an app that will allow for those who need help taking out their trash to have someone come at a specific time and date and take it out for them.',
    url: 'https://mattreileydevelope.wixsite.com/mattux/trash-day-1',
    image: porfolioImage9,
  },
  {
    title: 'Chat Bot Made with AI',
    description: 'Chat bot made with OpenAI as a mock chat-gpt',
    url: 'https://chatter-bot-next.vercel.app/',
    image: porfolioImage4,
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
    location: 'San Jose State University',
    title: "Bachelor's Degree",
    content: <p>My computer science degree provided me with a strong theoretical foundation, proficiency in programming languages, practical problem-solving skills, database management expertise,
       and effective teamwork and communication abilities, preparing me for diverse challenges in the field.</p>,
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
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
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

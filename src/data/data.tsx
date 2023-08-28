import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import CoffeeIcon from '../components/Icon/CoffeeIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/headerBackground.png';
import amanyar from '../images/portfolio/amanyar.png';
import letstwitt from '../images/portfolio/letstwitt.png';
import mcpherson from '../images/portfolio/mcpherson.png';
import mcu from '../images/portfolio/mcu.png';
import mecs from '../images/portfolio/mecs.png';
import profilepic from '../images/profilepic.png';
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
  title: 'Kader Gomez | Portfolio',
  description: 'Full Stack Software Developer and Civil Engineer',
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
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Kader Gómez.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-left">
        Civil Engineer and a <strong className="text-stone-100">Full Stack Developer.</strong> Creative and insatiable
        learner, always looking for ways to improve.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-left">
        In my free time, I love to be with my family, <strong className="text-stone-100">watch football</strong>,
        specially <strong className="text-stone-100">Real Madrid, </strong>and play with my dog{' '}
        <strong className="text-stone-100">Thunder. </strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://firebasestorage.googleapis.com/v0/b/kader-gomez-dev.appspot.com/o/Curriculum%20Kader.pdf?alt=media&token=50b7ff7d-12bc-4bdb-84bc-c531e0554d51',
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
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "D'McPherson Editorial App",
    description:
      'React Native App for DMcPherson Publishing House where you can see and read all the books of its catalog. Meet the authors and their works.',
    url: 'https://play.google.com/store/apps/details?id=com.dmcpherson',
    image: mcpherson,
  },
  {
    title: 'A Manyar',
    description:
      'IN DEVELOPMENT. Nutritional Coach for healthy eating and living, based on Open AI Api to generate recipes and diet plans.',
    url: 'https://a-manyar.com',
    image: amanyar,
  },
  {
    title: 'MECS',
    description:
      "D'McPherson Editorial Control Software is made in C# and manage all the data from the stakeholders, control the sales and more.",
    url: 'https://1drv.ms/v/s!AoScFW6xlNY3sZwXoMe2xtMxLHO4Tw?e=gf7VM6',
    image: mecs,
  },
  {
    title: 'MC-U tool',
    description:
      'Software for repairing and restoring many android mobile devices, unlock network, repair IMEI, baseband, FRP and much more functions where implemented.',
    url: 'https://github.com/kader1303/mcu-tool-script',
    image: mcu,
  },
  {
    title: "Let's Twitt",
    description: 'Chrome extension made with React + Typescript to generate tweets and alerts using the Open Ai API.',
    url: 'https://github.com/kader1303/Lets-Twitt-Ts',
    image: letstwitt,
  },
];

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm 31 years old and currently working as a software developer at Cute Digital Media. Additionally, I undertake some personal projects that help me learn and stay motivated every day. In the field of software development, I enjoy both backend and frontend work and have often had to handle both parts of the solution. While I'm currently focused on JavaScript, TypeScript, and React, I have experience with various languages and frameworks like C#, Autoit, Angular, Astro and others. In my personal life, I enjoy watching sports, especially futbol, and spending time with my family.`,
  aboutItems: [
    {label: 'Location', text: 'World Earth', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Cuban', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Tech, Family', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Camaguey', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cute Digital Media, LLC.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
  {
    name: 'Web Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Wordpress',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'MySql',
        level: 7,
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
        name: 'Flutter',
        level: 6,
      },
    ],
  },
  {
    name: 'Windows development',
    skills: [
      {
        name: 'C#',
        level: 6,
      },
      {
        name: 'Autoit',
        level: 8,
      },
    ],
  },
  {
    name: 'Cloud computing',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Linux VPS',
        level: 8,
      },
      {
        name: 'Firebase',
        level: 7,
      },
    ],
  },
  {
    name: 'Other skills',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Canva',
        level: 8,
      },
      {
        name: 'Scrum',
        level: 6,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2010 to 2012',
    location: 'University Marta Abreu from las Villas, Santa Clara, Cuba.',
    title: 'Automation Engineering',
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>
          {' '}
          During this two years I made my first approach to programming in C and C++, this was the trigger that years
          later made me came back to development.
        </li>
      </ul>
    ),
  },
  {
    date: '2016 to 2021',
    location: 'University of Camaguey, Cuba.',
    title: 'Civil Engineering',
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>
          On April 2021 participate in the 4th national workshop on quality and organization of works in construction.
        </li>
        <li>On May 2021 I was speaker on the 1st International Meeting of Civil Engineering Students.</li>
      </ul>
    ),
  },
];

export const certificates: TimelineItem[] = [
  {
    date: 'January 2023',
    location: 'Google Actívate - On Line.',
    title: 'Protect Your Business: Cybersecurity in Teleworking',
    href: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
    credential: 'MPG WS6 8JK',
  },
  {
    date: 'January 2023',
    location: 'Google Actívate - On Line',
    title: 'Cloud Computing.',
    href: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
    credential: 'DET 96H 9BG',
  },
  {
    date: 'June 2022',
    location: 'Platzi - On Line.',
    title: 'Practical JavaScript Course',
    href: 'https://platzi.com/p/kdryere1314286/curso/2327-javascript-practico-2021/diploma/detalle/',
  },
  {
    date: 'June 2022',
    location: 'Platzi - On Line.',
    title: 'Frontend Developer Course',
    href: 'https://platzi.com/p/kdryere1314286/curso/2467-frontend-developer/diploma/detalle/',
  },
  {
    date: 'May 2022',
    location: 'Platzi - On Line',
    title: 'TypeScript 3.',
    href: 'https://platzi.com/p/kdryere1314286/curso/1869-typescript-2020/diploma/detalle/',
  },
  {
    date: 'January 2022',
    location: 'Platzi - On Line',
    title: 'Business Leadership Course.',
    href: 'https://platzi.com/p/kdryere1314286/curso/1446-liderazgo-empresarial/diploma/detalle/',
  },
  {
    date: 'January 2022',
    location: 'Platzi - On Line',
    title: 'Course to Create Positive Habits.',
    href: 'https://platzi.com/p/kdryere1314286/curso/2356-creacion-habitos/diploma/detalle/',
  },
  {
    date: 'December 2021',
    location: 'Platzi - On Line',
    title: 'Basic JavaScript Course.',
    href: 'https://platzi.com/p/kdryere1314286/curso/1814-basico-javascript/diploma/detalle/',
  },
  {
    date: 'November 2021',
    location: 'Platzi - On Line',
    title: 'Effective Time Management.',
    href: 'https://platzi.com/p/kdryere1314286/curso/1749-gestion-tiempo/diploma/detalle/',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - Present',
    location: 'Cute Digital Media, LLC. Remote',
    title: 'Full Stack Developer',
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>
          Actually I'm developing React and React Native Apps for Cute Digital Media LLC, essentially focused in{' '}
          <a className="font-bold" href="http://pronyr.com/" rel="noopener" target="_blank">
            Pronyr TV
          </a>{' '}
          Project.
        </li>
        <li>I work daily with Git, Jira, Desktime among other platforms for developers.</li>
        <li>Also perform quality checks and tests for applications.</li>
      </ul>
    ),
  },
  {
    date: 'June 2020 - May 2022',
    location: "D'McPherson Group. Remote",
    title: 'Team Leader - Software Engineer',
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>I build and established strong partnerships with teams, vendors, and contractors.</li>
        <li>
          I created and maintain the software to handled the database for DMcPherson Publishing House{' '}
          <span className="font-bold">MECS</span>.
        </li>
        <li>I Designed and developed the mobile application in React Native for DMcPherson Publishing House.</li>
        <li>
          I was in charge of the QA Testing and server maintenance for various projects and clients, among them:{' '}
          <ul className="list-disc pl-5 text-left">
            <li>
              <a className="underline" href="https://www.dmcphersoneditorial.com" rel="noopener" target="_blank">
                D'McPherson Editorial
              </a>
            </li>
            <li>
              <a className="underline" href="https://www.dmcphersoneditorial.com" rel="noopener" target="_blank">
                Web de autores D'McPherson Editorial
              </a>
            </li>
            <li>
              <a className="underline" href="https://www.grupomcpherson.com" rel="noopener" target="_blank">
                Deco McPherson Web
              </a>
            </li>
            <li>
              <a className="underline" href="https://laperegrinarestaurante.com/" rel="noopener" target="_blank">
                La Peregrina Restaurante
              </a>
            </li>
          </ul>
        </li>
        <li>Conduct the full lifecycle software development from development to production.</li>
        <li>Modify company web applications and processes to increase productivity and performance.</li>
      </ul>
    ),
  },
  {
    date: 'March 2014 - December 2020',
    location: 'Own Cell Workshop in Camaguey, Cuba',
    title: 'Cell Phone Repair Technician',
    content: (
      <ul className="list-disc pl-5 text-left">
        <li>Checked cell phones for signs of fraud and compatibility with refurbishment.</li>
        <li>Performed complete phone erasures and factory resets, debugged problems and refurbished devices.</li>
        <li>
          Tested repaired, newly installed or updated equipment to ensure proper function and conformance to
          specifications.
        </li>
        <li>Installed, set up and repaired devices and system components.</li>
        <li>Developed MC-U Tool to repair, unlock and reinstall hundreds of Android devices.</li>
        <li>Provided excellent service and attention to the customers.</li>
        <li>I owned 3 cell phone workshops in different areas of the city.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Feel free to get in touch with me!',
  description:
    "If you have questions, feedback, or just want to connect, don't hesitate to reach out. I'm always eager to engage with fellow developers, whether it's about programming, tech news, or even if you just want to chat about our shared interest in massages.",
  items: [
    {
      type: ContactType.Email,
      text: 'redakdev@gmail.com',
      href: 'mailto:redakdev@gmail.com',
    },
    {
      type: ContactType.Twitter,
      text: '@KaderGomezDev',
      href: 'https://twitter.com/KaderGomezDev',
    },
    {
      type: ContactType.Github,
      text: 'Job',
      href: 'https://github.com/Redak0313',
    },
    {
      type: ContactType.LinkedIn,
      text: 'kadergomezdev',
      href: 'https://www.linkedin.com/in/kadergomezdev',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Redak0313'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kadergomezdev/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kadergomezdev/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/KaderGomezDev'},
  {label: 'Buy me a coffee', Icon: CoffeeIcon, href: 'https://paylink.kadergomez.dev/'},
];

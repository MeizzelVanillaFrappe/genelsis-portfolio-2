import { meta, shopify, starbucks, tesla,  optum, noLogo, } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,

    gsap,

    yourai,
    shoeshop,
    appleclone,
    resume,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    // {
    //     imageUrl: git,
    //     name: "Git",
    //     type: "Version Control",
    // },
    // {
    //     imageUrl: github,
    //     name: "GitHub",
    //     type: "Version Control",
    // },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: gsap,
        name: "GSAP",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Health Care Advocate & Fax/Mail Scheduler",
        company_name: "Optum",
        icon: optum,
        iconBg: "#FF5F1F",
        date: "March 2020 - April 2021",
        points: [
          "I'm a former Health Care Advocate of Optum Global Solutions for more than a year. And in this work I've managed to communicate to different members from different states of US. ",
          "Answering every calls with the heart to help solved the problem of the members, giving them the solution they need to make their day better.",
          "Giving enough and needed information for them to grasp everything they need to be familiar with their health care plan and maximize every benefit they have.",
          "Working as a Health Care Advocate for more than a year makes me realize that a job can also be a life saving opportunity to someone in need of help.",
        ],
      },
      {
        title: "Game Developer/Lead Programmer",
        company_name: "House of Vallinder",
        icon: noLogo,
        iconBg: "#FF9021",
        date: "Jan 2021 - Feb 2022",
        points: [
          "I work as a Lead Programmer and 3D Designer on this Company to create a Unity Android Game.",
          "I managed to create a Horror Game And Also a Board game for 2 years.",
          "I designed the main game and programmed it.",
          "And also one of the 3D Designer who designed the characters of the game.",
        ],
      },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: yourai,
        theme: 'btn-back-violet',
        name: 'YourAI',
        description: 'Is a website that uses modern User Interface design. It also uses modern design to show prices of every services that is offered. It also uses bento box design UI to show other important information on the website.',
        link: 'https://meizzelvanillafrappe.github.io/yourai/',
    },
    {
        iconUrl: shoeshop,
        theme: 'btn-back-red',
        name: 'ShoeShop',
        description: 'A Landing page for a shoes brand online website. This website uses the power of Tailwind Design as well as the React framework to make a beautiful website to showcase your products.',
        link: 'https://meizzelvanillafrappe.github.io/shoeshop/',
    },
    {
        iconUrl: appleclone,
        theme: 'btn-back-black',
        name: 'Apple Like Website',
        description: 'A UI Design inspired by the Apple cellphone brand website. This website uses the power of GSAP framework for the animation of its contents.',
        link: 'https://meizzelvanillafrappe.github.io/appleclone/',
    },
    {
        iconUrl: resume,
        theme: 'btn-back-orange',
        name: 'Portfolio Website 2',
        description: 'A portfolio Website Created using the combination of React and Tailwind CSS.',
        link: 'https://meizzelvanillafrappe.github.io/genelsis-portfolio-1/',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Portfolio Website 2',
    //     description: 'A portfolio Website Created using the combination of React and Tailwind CSS.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];
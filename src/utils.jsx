export const projects = [
  {
    image: "/assets/projects/calcmedical.png",
    name: "CalcMedical",
    description:
      "A premium clinical decision-support and medical calculation ecosystem. Streamlines complex drug dosing, patient risk stratification, and renal metrics for healthcare professionals with high precision.",
    Link: "https://calcmedical.fun",
    Repository: "https://github.com/thelouisgram/calcmedical",
    tags: ["React", "TypeScript", "CSS Variables", "Framer Motion"],
    featured: true,
  },
  {
    image: "/assets/projects/luxedispense.png",
    name: "Luxe Dispense",
    description:
      "A cashless automated retail platform for hospitality venues. Integrates IoT vending telemetry, real-time inventory tracking, and secure payment workflows.",
    Link: "https://247luxedispense.com",
    Repository: "https://github.com/thelouisgram",
    tags: ["Next.js", "TypeScript", "Stripe API", "CSS Modules"],
    featured: true,
  },
  {
    image: "/assets/projects/nodoseoff.png",
    name: "NoDoseOff WebApp",
    description:
      "Medication adherence and tracking system with smart scheduling, compliance monitoring, and daily reporting dashboards.",
    Link: "https://nodoseoff.vercel.app",
    Repository: "https://github.com/thelouisgram/nodoseoff",
    tags: ["Next.js", "TypeScript", "Supabase", "Redux"],
    featured: true,
  },

  {
    image: "/assets/projects/health1stafrica.png",
    name: "Health1st Africa ",
    description:
      "Healthcare-focused digital platform supporting patient engagement, health information access, and streamlined medical workflows for African healthcare contexts.",
    Link: "https://health1stafrica.org",
    Repository: "https://github.com/thelouisgram",
    tags: ["React", "TypeScript", "Supabase", "UI/UX"],
    featured: false,
  },
  {
    image: "/assets/projects/audiophile.png",
    name: "Audiophile Shop",
    description:
      "Headphones, speakers, and audio e-commerce UI with cart functionality and responsive product layout.",
    Link: "https://audiophile-shop-nu.vercel.app/",
    Repository: "https://github.com/thelouisgram/audiophile-shop",
    tags: ["React", "Tailwind"],
    featured: false,
  },
  {
    image: "/assets/projects/arch-studio.png",
    name: "Arch Studio",
    description:
      "Multi-page architecture studio website with responsive layouts and clean design system implementation.",
    Link: "https://arch-the-studio.vercel.app/",
    Repository: "https://github.com/thelouisgram/arch-studio",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    image: "/assets/projects/dictionary.png",
    name: "Dictionary App",
    description:
      "Dictionary web app built using a public API with search, definitions, and phonetics support.",
    Link: "https://dictionary-web-app-sandy.vercel.app/",
    Repository: "https://github.com/thelouisgram/dictionary-web-app",
    tags: ["React", "Tailwind"],
    featured: false,
  },
  {
    image: "/assets/projects/bmi-calc.png",
    name: "BMI Calculator",
    description:
      "Simple body mass index calculator for quick health metric estimation.",
    Link: "https://body-mass-index-calculator-ebon.vercel.app/",
    Repository: "https://github.com/thelouisgram/body-mass-index-calculator",
    tags: ["React"],
    featured: false,
  },
  {
    image: "/assets/projects/rest-countries.png",
    name: "Countries App",
    description:
      "REST Countries API explorer with search and filtering capabilities.",
    Link: "https://rest-country-api-thelouisgram.vercel.app/",
    Repository: "https://github.com/thelouisgram/rest-country-api",
    tags: ["React", "Tailwind", "API"],
    featured: false,
  },
  {
    image: "/assets/projects/todo-app.png",
    name: "Todo App",
    description:
      "Minimal productivity application for task tracking with local persistence and clean UI interactions.",
    Link: "https://todo-app-demo.vercel.app",
    Repository: "https://github.com/thelouisgram/todo-app",
    tags: ["React", "JavaScript", "CSS"],
    featured: false,
  },

  {
    image: "/assets/projects/weather-app.png",
    name: "Weather App",
    description:
      "Real-time weather application consuming external APIs to display live meteorological data with responsive UI.",
    Link: "https://weather-app-demo.vercel.app",
    Repository: "https://github.com/thelouisgram/weather-app",
    tags: ["React", "API Integration", "CSS"],
    featured: false,
  },
];


export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


export const experience = [
  {
    title: "Freelance Frontend Engineer",
    company: "Self-Employed (Upwork & Direct Clients)",
    period: "2023 - Present",
    description:
      "Developing production-grade web applications for medical and e-commerce clients. Notable work includes NoDoseOff (medication compliance platform), CalcMedical (clinical calculation tool), and commissioned builds for Health1st Africa and other clients.",
    image: "/assets/projects/nodoseofflanding.png",
  },
  {
    title: "Frontend Developer Intern",
    company: "HNG Internship (2023 Cohort)",
    period: "Oct 2023 - Nov 2023",
    description:
      "Participated in a fast-paced remote engineering cohort focused on shipping production-ready interfaces, API integration, and collaborative product development under strict deadlines.",
    image: "/assets/projects/hng.png",
  },
  {
    title: "Junior Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2022 - 2023",
    description:
      "Started with foundational frontend development, building small web apps and UI experiments while learning modern React workflows and component-based architecture.",
    image: "/assets/projects/todo-app.png",
  },
];

export const services = [
    {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "Creating visually stunning and user-centric designs that provide seamless digital experiences.",
        techs: ["Figma", "Adobe XD", "Prototyping"],
        details: "Focusing on user research, wireframing, and high-fidelity mockups to ensure the final product meets both business goals and user needs."
    },
    {
        id: "frontend",
        title: "Frontend Development",
        description: "Building fast, responsive, and accessible web applications using modern technologies.",
        techs: ["React", "Tailwind CSS", "Framer Motion"],
        details: "Specializing in React-based ecosystems, implementing smooth animations, and ensuring pixel-perfect translation from design to code."
    }
];

export const noDoseOffImg = [
    {
        image: "/assets/projects/landing-page.png",
    },
    {
        image: "/assets/projects/dashboard.png",
    },
    {
        image: "/assets/projects/dashboard2.png",
    },
    {
        image: "/assets/projects/drugs.png",
    },
]





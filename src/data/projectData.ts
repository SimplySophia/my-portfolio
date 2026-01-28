
export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tools: string[];
  slug: string;
  task: string;
  challenges: string;
  solutions: string;
  highlights: string[];
  conclusion: string;
};

export const projects: Project[] = [
  {
    title: "Villa",
    description: "A house listings app that allows users to view and manage property listings.",
    image: "/images/villa.png",
    link: "https://villa-eosin.vercel.app/",
    repo: "https://github.com/SimplySophia/Villa",
    tools: ["Next.js", "Tailwind CSS", "React", "API"],
    slug: "villa",
    task: "Build a real estate app with listings, search, and property details.",
    challenges: "Handling dynamic routes, state management, and responsiveness.",
    solutions: "Used Next.js dynamic routing, Tailwind for design, and reusable components.",
    highlights: [
      "Dynamic routing for property pages",
      "Search and filter functionality",
      "Clean responsive UI",
    ],
    conclusion: "Villa was a learning experience in building scalable real estate apps.",
  },
  {
    title: "InkCore",
    description: "An AI powered SaaS Product for Blog Posts and Social Media Content.",
    image: "/images/inkcore.jpg",
    link: "https://inkcore.vercel.app/",
    repo: "https://github.com/SimplySophia/inkCore",
    tools: ["Nextjs", "TailwindCSS", "TypeScript", "custom AI API"],
    slug: "inkcore",
    task: "Handling the frontend experience and UI architecture for InkCore’s web app designing and building clean, modern, responsive interfaces that reflect the product’s AI identity",
    challenges: "It’s been a mix of design precision, responsiveness obsession, and AI integration magic — and I’m loving every moment of it.",
    solutions: "Build and refine InkCore, an AI-driven platform that helps users create, optimize, and manage blog content efficiently.",
    highlights: [
      "Designing the AI-powered blog editor page (text area + AI assist sidebar)",
      "Implementing SEO content analysis UI (readability, keyword density, etc.)",
      "Adding an onboarding flow that introduces new users to InkCore’s tools.",
    ],
    conclusion: "InkCore is still a build in progress",
  },
  {
    title: "Padisquare",
    description: "A simple multi-tenant mimi store that allows vendors to generate their own store fronts.",
    image: "/images/padi.png",  
    link: "https://padisquare-teal.vercel.app/",
    repo: "https://github.com/SimplySophia/padisquare",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "API"],    
    slug: "padisquare",
    task: "Build a multi-tenant e-commerce platform allowing vendors to create and manage their own storefronts.",
    challenges: "Implementing multi-tenancy and managing vendor-specific data.",
    solutions: "Used Nextjs and Tailwind css for design, and reusable components Data fetching Metadata, SEO ISR caching strategies for performance.",
    highlights: ["User Interface", "Vendor-specific storefronts", "Responsive design" ,"SEO optimization"],
    conclusion: "Learning hub was a great project to enhance my frontend development skills.",
  },
  { title: "Dont List", 
    description: "A simple app that allows users to create and manage a list of things they should avoid doing.", 
    image: "/images/dont-list.png", 
    link: "https://don-t-list.vercel.app/", 
    repo: "https://github.com/SimplySophia/DontList", 
    tools: ["HTML", "CSS", "JavaScript"],
    slug: "dont-list",
    task: "Create a simple to-do list app with add, edit, and delete functionality.",
    challenges: "Managing state and ensuring data persistence.",
    solutions: "Used local storage for data persistence and modular JavaScript for state management.",
    highlights: ["Add, edit, delete tasks", "Local storage for data persistence", "Clean and simple UI"],
    conclusion: "Dont List was a fun project that helped me improve my JavaScript skills.",
  },
];

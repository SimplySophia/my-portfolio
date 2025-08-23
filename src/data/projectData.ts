// src/data/projectsData.ts


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
    title: "Tour",
    description: "A travel tour app that allows users to explore and book tours.",
    image: "/images/tour.png",
    link: "https://travel-tourcast.vercel.app/",
    repo: "",
    tools: ["Nextjs", "TailwindCSS", "TypeScript", "framer"],
    slug: "tour",
    task: "Create a travel tour app with tour listings, details, and booking.",
    challenges: "Integrating animations and managing complex state.",
    solutions: "Used framer-motion for animations and Context API for state management.",
    highlights: [
      "Animated transitions and effects",
      "Tour listing and details pages",
      "Responsive design",
    ],
    conclusion: "Tour was a fun project that enhanced my frontend and animation skills.",
  },
  {
    title: "Learning hub",
    description: "A simple educational platform that offers a variety of courses and resources for learners.",
    image: "/images/brain.png",  
    link: "https://learning-hub-seven-alpha.vercel.app/",
    repo: "https://github.com/SimplySophia/learning-hub",
    tools: ["React", "Tailwind CSS", "TypeScript"],    
    slug: "learning-hub",
    task: "Develop an educational platform with course listings and user authentication.",
    challenges: "Implementing user authentication and managing course data.",
    solutions: "Used Nextjs and Tailwind css for design, and reusable components.",
    highlights: ["User Interface", "Course listing and details", "Responsive design"],
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

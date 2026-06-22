import spendlHomeMockup from "../img/spendlHomeMockup.png";
import TixhubHomeMockup from "../img/tixhubHomeMockup.png";
import wedEaseMockup from "../img/wedEaseMockup.png";

export const projectsData = [
    {
        id: 1,
        title: "Spendl - Personal Finance Dashboard",
        category: "Web",
        description: "A modern personal finance dashboard (Spendl) that helps users track their income, outflow, and overall balance. Implements interactive monthly expense visualizations with charts and a custom dark theme.",
        image: spendlHomeMockup,
        tags: ["Next JS", "SCSS", "Supabase", "Chart JS", "Responsive Design", "Axios", "API Development", "Authentication System"],
        github: "https://github.com/fathanfadillah74/spendl",
        demo: "https://spendl-xi.vercel.app"
    },
    {
        id: 2,
        title: "Tixhub - Event & Ticket Management",
        category: "Web",
        description: "TixHub is a modern, responsive web application designed for seamless event discovery and ticket management. It features a dynamic event listing page with interactive search, filter, and sorting capabilities, ensuring users can easily find concerts, exhibitions, and shows matching their interests. The platform also includes a secure authentication system and a streamlined booking process with instant confirmation.",
        image: TixhubHomeMockup,
        tags: ["Next JS", "Golang", "Gin", "AWS EC2", "PostgreSQL", "JWT", "API Development", "Authentication System", "Event Management"],
        github: "https://github.com/fathanfadillah74/tixhub",
        demo: "https://tixhub-client.vercel.app/"
    },
    {
        id: 3,
        title: "WedEase - Wedding Planner UI/UX Design",
        category: "UI/UX",
        description: "A modern, intuitive mobile interface designed for wedding planners, enabling seamless management of clients, budgets, and event timelines. This UI/UX concept focuses on a clean, elegant layout with high-contrast typography and accessible navigation, ensuring a stress-free planning experience for busy professionals.",
        image: wedEaseMockup,
        tags: ["Figma"],
        demo: "https://www.figma.com/design/bPBTJyHAP3DuAfxOdHOwoi/WedEase?node-id=0-1&t=hYCwD7Y3rXYHoQuW-1"
    }
];

export const categories = ["All", "Web", "UI/UX"];
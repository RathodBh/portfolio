import { Code, Database, Github, Globe, Home, Linkedin, Mail, Server, Shield, Zap } from "lucide-react";
import { THeroSocialMedia, TProject, TSkill } from "./types";

export const linkedinUrl = `https://www.linkedin.com/in/bhavesh-rathod-b48b0b196/`;
export const githubUrl = `https://github.com/RathodBh`;
export const gmailUrl = `mailto:111rathodbhavesh@gmail.com`;
export const HERO_SOCIAL_MEDIA: THeroSocialMedia[] = [
  {
    name: "LinkedIn",
    href: linkedinUrl,
    icon: Linkedin,
    hover: "hover:bg-blue-600",
  },
  {
    name: "Github",
    href: githubUrl,
    icon: Github,
    hover: "hover:bg-black",
  },
  {
    name: "Gmail",
    href: gmailUrl,
    icon: Mail,
    hover: "hover:bg-red-600",
  },
];


export const PROJECTS: TProject[] = [
  {
    id: 1,
    title: "CHAIN-IT",
    description:
      "Blockchain-based digital locker solution providing security for documents with personal verification.",
    fullDescription:
      "CHAIN-IT is a revolutionary blockchain-based digital locker system that provides unparalleled security for important documents. Similar to DigiLocker but built on blockchain technology, it ensures document authenticity through personal verification and cryptographic security.",
    icon: Shield,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Microservices",
      "PostgreSQL",
      "TypeORM",
      "Nx Monorepo",
    ],
    image:
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
    website: "https://chainit.com",
    features: [
      "Blockchain document storage",
      "Personal document verification",
      "Secure access controls",
      "Clean architecture implementation",
    ],
  },
  {
    id: 2,
    title: "LoyalList",
    description:
      "Customer relationship management platform with task management and automated bulk email/SMS features.",
    fullDescription:
      "Customer relationship management platform with task management and automated bulk email/SMS features.",
    icon: Zap,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Hasura",
      "GraphQL",
    ],
    image:
      "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?_gl=1*m8s520*_ga*MTAyMjIzMjU1NS4xNzY2ODM5ODEz*_ga_8JE65Q40S6*czE3NjY4Mzk4MTIkbzEkZzEkdDE3NjY4Mzk4NzgkajYwJGwwJGgw",
    website: "https://app.loyallist.com",
    features: [
      "Customer Relationship Management (CRM)",
      "Task Management",
      "Automated bulk send emails",
      "Automated bulk send SMS",
    ],
  },
  {
    id: 3,
    title: "IKnowa",
    description:
      "Property platform connecting property owners with contractors for home-related work and price estimation.",
    fullDescription:
      "IKnowa is an innovative platform that bridges the gap between property owners and skilled contractors. Property owners can register and hire contractors for various home improvement projects, while contractors can create detailed profiles and provide accurate price estimates based on project requirements.",
    icon: Home,
    technologies: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Vue.js",
      "TypeORM",
      "PostgreSQL",
    ],
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    website: "https://iknowa.com",
    features: [
      "Property owner registration system",
      "Contractor profile management",
      "Automated price estimation",
      "Project management tools",
    ],
  },
  {
    id: 4,
    title: "BlueMind",
    description:
      "Financial advisor automation platform for client task management with API automation.",
    fullDescription:
      "BlueMind is a comprehensive financial advisor automation platform that streamlines client task management through intelligent API automation. The platform enables financial advisors to automate routine tasks, manage client portfolios, and provide personalized financial guidance efficiently.",
    icon: Zap,
    technologies: ["React.js", "Node.js", "Sequelize", "MySQL"],
    website: "https://bluemind.app/",
    image:
      "https://images.pexels.com/photos/7567554/pexels-photo-7567554.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Automated client task management",
      "API integration for financial data",
      "Real-time portfolio tracking",
      "Customizable advisor dashboard",
    ],
  },
];

export const skills: TSkill[] = [
  { icon: Code , name: 'Frontend', techs: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: Server , name: 'Backend', techs: ['Node.js', 'NestJS', 'Express.js', 'REST APIs'] },
  { icon: Database , name: 'Database', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'TypeORM'] },
  { icon: Globe , name: 'Tools & Others', techs: ['Git', 'GitHub', 'VS Code', 'Postman', 'AWS'] },
];

export const RESUME_LINK = `https://drive.google.com/uc?export=download&id=1nhlHnOLFR-UNeHtZ01y63RCPXGD2Re5R`
export const LOGO_URL = `https://drive.google.com/file/d/1mxvET8CMjxwVovL07c60g2O_nq8svCRe/view?usp=sharing`;
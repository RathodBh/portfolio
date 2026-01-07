import { LucideIcon } from "lucide-react";

export type THeroSocialMedia = {
  name: string;
  href: string;
  icon: LucideIcon;
  hover: string;
};

export type TProject = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  technologies: string[];
  website: string;
  image: string;
  features: string[];
};

export type TSkill = { icon: LucideIcon , name: string, techs: string[] };
  
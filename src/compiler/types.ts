import { ReactNode } from 'react';

// Tab Menu
export interface TabMenuProps {
  content: TabMenuElem[];
  style: TabMenuStyle;
}

export interface TabMenuElem {
  heading: string | JSX.Element;
  text: string | JSX.Element;
  ariaLable: string;
}

export interface TabMenuStyle {
  headingDefault: string;
  headingActive: string;
  headingInactive: string;
  content: string;
}

// Button
export interface ButtonProps {
  color: Color;
  size: Size;
  weight: Weight;
  handler: Function;
  children?: ReactNode;
}

export enum Color {
  ROSE,
  YELLOW,
  GREEN,
}

export enum Size {
  LARGE,
  SMALL,
}

export enum Weight {
  REGULAR,
  BOLD,
  EXTRABOLD,
}

// Project
export interface ProjectProps {
  project: Project;
}

export interface Project {
  title: string;
  type: string;
  descrition: string;
  images: [string, string, string];
  technologies: string[];
  deployement: string;
  repository: string;
}

// Modal
export interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

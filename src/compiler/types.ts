import { ReactNode } from 'react';

export interface DisclosureProps {
  content: DisclosureElem[];
  style: DisclosureStyle;
}

export interface DisclosureElem {
  heading: string | JSX.Element;
  text: string | JSX.Element;
  ariaLable: string;
}

export interface DisclosureStyle {
  headingDefault: string;
  headingActive: string;
  headingInactive: string;
  content: string;
}

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

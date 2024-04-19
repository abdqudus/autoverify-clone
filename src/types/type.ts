import { MutableRefObject, ReactNode } from "react";

export type Card = {
  img: string;
  text: string;
  amount: string;
  bg: string;
};
export type GraphData = { name: string; sale: number; fill: string };
export type SideBarItems = {
  srcActive: string;
  src: string;
  text: string;
  isActive: boolean;
  hasDropDown: boolean;
  dropDownItems: { text: string; route: string }[];
  newHeight?: string;
  linkTo?: string;
};
export type MenuType = {
  menu: SideBarItems;
  children?: ReactNode;
};
export type ES = {
  expandedSection?: string;
  isSideBarOpen: boolean;
  refs?: { inputRef: InputRef | null; divRef: DivRef | null };
  collapsedMenu: string;
};
export type ExpandAction = {
  type:
    | "SET_EXPANDED_SECTION"
    | "CLOSE_SIDEBAR"
    | "SET_REFS"
    | "COLLAPSED_MENU";
  payload?: string;
  refs?: [InputRef, DivRef];
};
export type DashBoardWrapperProps = {
  header: string;
  subheader: string;
  children: ReactNode;
  font?: string;
  additionalHeader?: ReactNode;
  pFont?: string;
};

export type HS = {
  isHamburgerOpened: boolean;
};
export type HamburgerAction = {
  type: "TOGGLE_HAMBURGER" | "REMOVE_STYLE" | "SLIDE_OUT";
};
export type DivRef = MutableRefObject<HTMLDivElement | null>;
export type InputRef = MutableRefObject<HTMLInputElement | null>;

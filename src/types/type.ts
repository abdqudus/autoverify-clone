import { Dispatch, ReactNode } from "react";

export type Card = {
  img: string;
  text: string;
  amount: string;
  bg: string;
};
export type GraphData = { name: string; sale: number; fill: string };
export type SideBarItems = {
  src: string;
  text: string;
  isActive: boolean;
  hasDropDown: boolean;
  dropDownItems: { text: string; route: string }[];
  newHeight?: string;
};
export type MenuType = {
  menu: SideBarItems;
  children?: ReactNode;
  dispatch: Dispatch<ExpandAction>;
  state: { expandedSection: string };
};
export type ES = {
  expandedSection: string;
};
export type ExpandAction = { type: "SET_EXPANDED_SECTION"; payload: string };
export type DashBoardWrapperProps = {
  header: string;
  subheader: string;
  children: ReactNode;
  font?: string;
  additionalHeader?: ReactNode;
  pFont?: string;
};

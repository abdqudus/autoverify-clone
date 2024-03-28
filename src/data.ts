import Money from "/money-tag 1.png";
import Income from "/Group.png";
import Expense from "/001-medical.png";
import Savings from "/003-saving.png";
import { Card, GraphData, SideBarItems } from "./types/type";

export const cards: Card[] = [
  {
    img: Money,
    text: "My Balance",
    amount: "$12,750",
    bg: "bg-[#FFF5D9] ",
  },
  {
    img: Income,
    text: "Income",
    amount: "$5,600",
    bg: "bg-[#E7EDFF]",
  },
  {
    img: Expense,
    text: "Expense",
    amount: "$3,460",
    bg: "bg-[#FFE0EB]",
  },
  {
    img: Savings,
    text: "Total Saving",
    amount: "$7,920",
    bg: "bg-[#DCFAF8]",
  },
] as const;

export const graphData: GraphData[] = [
  {
    name: "12th",
    sale: 1.2,
    fill: "#B5E4CA",
  },
  {
    name: "17th",
    sale: 0.9,
    fill: "#FFBC99",
  },
  {
    name: "22th",
    sale: 1.4,
    fill: "#2A85FF",
  },
  {
    name: "27th",
    sale: 0.75,
    fill: "#B5E4CA",
  },
  {
    name: "3rd",
    sale: 1.1,
    fill: "#B5E4CA",
  },
  {
    name: "8th",
    sale: 0.4,
    fill: "#FFBC99",
  },
  {
    name: "28th",
    sale: 0.9,
    fill: "#B5E4CA",
  },
];
export const lineData = [
  {
    date: "17th Feb",
    dateSmall: "17th",
    sale: 0,
  },
  {
    date: "19th Feb",
    dateSmall: "19th",
    sale: 0,
  },
  {
    date: "21th Feb",
    dateSmall: "21th",
    sale: 0,
  },
  {
    date: "23th Feb",
    dateSmall: "23rd",
    sale: 0,
  },
];

export const sideBarItems: SideBarItems[] = [
  {
    src: "/home.svg",
    text: "Dashboard",
    isActive: true,
    hasDropDown: false,
    dropDownItems: [],
  },
  {
    src: "/products.png",
    text: "Products",
    isActive: false,
    hasDropDown: true,
    dropDownItems: [
      { text: "All Products", route: "products" },
      { text: "Create New", route: "new-products" },
      { text: "Payments Methods", route: "payment-method" },
    ],
  },
  {
    src: "/customer.png",
    text: "Customers",
    isActive: false,
    hasDropDown: true,
    dropDownItems: [
      { text: "Search", route: "/" },
      { text: "New Transaction", route: "/" },
      { text: "List of Transaction", route: "/" },
      { text: "History Export", route: "/" },
      { text: "Complaints", route: "/" },
      { text: "List of Complaints", route: "/" },
      { text: "Reply Template", route: "/" },
      { text: "Sales Statistics", route: "/" },
      { text: "Sales Blacklists", route: "/" },
      { text: "Sales Settings", route: "/" },
    ],
    newHeight: "h-[428px]",
  },
  {
    src: "/codebases.png",
    text: "Code bases",
    isActive: false,
    hasDropDown: true,
    dropDownItems: [
      { text: "Search Code", route: "/" },
      { text: "Refunds", route: "/" },
      { text: "Payout", route: "/" },
      { text: "Statements", route: "/" },
    ],
    newHeight: "h-[200px]",
    // 48 200
  },
  {
    src: "/codebases.png",
    text: "Marketing",
    isActive: false,
    hasDropDown: false,
    dropDownItems: [],
  },
  {
    src: "/codebases.png",
    text: "Ebay",
    isActive: false,
    hasDropDown: false,
    dropDownItems: [],
  },
  {
    src: "/settings.png",
    text: "Settings",
    isActive: false,
    hasDropDown: false,
    dropDownItems: [],
  },
];

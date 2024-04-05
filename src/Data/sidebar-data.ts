import { SideBarItems } from "../types/type";

export const sideBarItems: SideBarItems[] = [
    {
      src: "/home.svg",
      text: "Dashboard",
      isActive: true,
      hasDropDown: false,
      dropDownItems: [],
      linkTo: "/",
    },
    {
      src: "/products.png",
      text: "Products",
      isActive: false,
      hasDropDown: true,
      dropDownItems: [
        { text: "All Products", route: "products/all-products" },
        { text: "Create New", route: "products/new-products" },
        { text: "Payments Methods", route: "products/payment-method" },
      ],
    },
    {
      src: "/customer.png",
      text: "Customers",
      isActive: false,
      hasDropDown: true,
      dropDownItems: [
        { text: "Search", route: "customers/search" },
        { text: "New Transaction", route: "customers/new-transaction" },
        { text: "List of Transaction", route: "customers/transactions" },
        { text: "History Export", route: "customers/history-product" },
        { text: "Complaints", route: "customers/complaints/search" },
        { text: "List of Complaints", route: "customers/list-of-complaints" },
        {
          text: "Reply Templates",
          route: "customers/complaints/reply-templates",
        },
        { text: "Sales Statistics", route: "/" },
        { text: "Sales Blacklist", route: "customers/complaints/blacklist" },
        { text: "Sales Settings", route: "customers/sales-settings" },
      ],
      newHeight: "h-[428px]",
    },
    {
      src: "/store.png",
      text: "Store",
      isActive: false,
      hasDropDown: false,
      dropDownItems: [],
    },
    {
      src: "/codebases.png",
      text: "Code bases",
      isActive: false,
      hasDropDown: true,
      dropDownItems: [
        { text: "Search Code", route: "codebase/search-codes" },
        { text: "New Base Codes", route: "codebase/new-base-code" },
        { text: "Code List", route: "codebase/code-list" },
        { text: "Export Code", route: "codebase/export-code" },
      ],
      newHeight: "h-[200px]",
    },
    {
      src: "/codebases.png",
      text: "Marketing",
      isActive: false,
      hasDropDown: true,
      dropDownItems: [
        { text: "New Email Campaign", route: "marketing/new-email-campaign" },
        {
          text: "List Of Email Campaign",
          route: "marketing/list-of-email-campaign",
        },
        { text: "New Shipment", route: "marketing/new-shipment" },
        {
          text: "List Of Automatic Shipment",
          route: "marketing/list-of-automatic-shipment",
        },
      ],
      newHeight: "h-[215px]",
    },
    {
      src: "/codebases.png",
      text: "Ebay",
      isActive: false,
      hasDropDown: true,
      dropDownItems: [
        {
          text: "Connected Accounts",
          route: "ebay/connected-accounts",
        },
        {
          text: "Automatic Monitoring",
          route: "ebay/automatic-monitoring",
        },
        {
          text: "Ebay Configurations",
          route: "ebay/configurations",
        },
      ],
      newHeight: "h-[150px]",
    },
    {
      src: "/settings.png",
      text: "Settings",
      isActive: false,
      hasDropDown: false,
      dropDownItems: [],
      linkTo: "settings/layout",
    },
  ];
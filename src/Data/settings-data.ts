export const settingsNavItems: {
  text: string;
  route: string;
}[] = [
  { text: "Layout", route: "/settings/layout" },
  { text: "General Settings", route: "/settings/general-settings" },
  { text: "Personalized Messages", route: "/settings/personalised-messages" },
  { text: "Page Personalization", route: "/settings/page-personalization" },
  { text: "Payments", route: "/settings/payment-history" },
  { text: "Change Password", route: "/settings/change-password" },
  {
    text: "Two Factor Authentication",
    route: "/settings/two-fa-auth",
  },
  { text: "Notifications", route: "/settings/notifications" },
  { text: "API", route: "/settings/api" },
];
type GeneralSettings = {
  text: string;
  placeholder?: string;
  id?: string;
  type?: string;
  options?: string[];
};
export const generalSettingsData: GeneralSettings[] = [
  {
    text: "Username (if you want to change this address, contact us)",
    placeholder: "techiewestly@gmail.com",
    id: "username",
  },
  {
    text: "Name",
    placeholder: "Tekena",
    id: "name",
  },
  {
    text: "Last name",
    placeholder: "West",
    id: "last-name",
  },
  {
    text: "Email",
    placeholder: "techiewestly@gmail.com",
    id: "email",
    type: "email",
  },
  {
    text: "Mobile number",
    placeholder: "+2347038216467",
    id: "number",
    type: "tel",
  },
  {
    text: "Select the time zone in which we want to display dates in the system",
    type: "select",
    options: ["(GMT+1:00) Europe/Warsaw (Central European Time)", "option 2"],
  },
  {
    text: "Choose language",
    type: "select",
    options: ["English", "French"],
  },
];
export const paymentHistoryHeader = [
  { text: "Invoice number", size: "w-[40%]" },
  { text: "Code", size: "w-[10%]" },
  { text: "Amount", size: "w-[10%]" },
  { text: "Quantity", size: "w-[10%]" },
  { text: "Date", size: "w-[30%]" },
];
export const paymentHistoryBody = [
  {
    invoiceNo: 107336,
    code: 34005,
    amount: "1,0000",
    quantity: 2,
    date: "23/3",
  },
  {
    invoiceNo: 1045685,
    code: 34006,
    amount: "2.567",
    quantity: 3,
    date: "23/3",
  },
  {
    invoiceNo: 1045688,
    code: 34007,
    amount: "1,000",
    quantity: 1,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
  {
    invoiceNo: 1045688,
    code: 34008,
    amount: "2,567",
    quantity: 3,
    date: "",
  },
];

export const notificationHeader = [
  { text: "#", size: "w-[5%]" },
  { text: "Notifications", size: "lg:w-[65%] sm:w-[35%]" },
  { text: "Email", size: "lg:w-[10%] sm:w-[30%]" },
  { text: "SMS", size: "lg:w-[10%] sm:w-[30%]" },
];
export const notificationBody = [
  { text: "New transaction", isEmailEnabled: true, isSMSEnabled: false },
  { text: "No codes in the base", isEmailEnabled: true, isSMSEnabled: false },
  {
    text: "Automatic monitoring activation",
    isEmailEnabled: false,
    isSMSEnabled: false,
  },
  {
    text: "Low balance (20) of credits on account",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
  {
    text: "No credits on account",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
  {
    text: "New code complaint",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
  {
    text: "Response to complaint",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
  {
    text: "Complaint closure by customer",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
  {
    text: "Detected delays Allegro PayU",
    isEmailEnabled: false,
    isSMSEnabled: false,
  },
  {
    text: "Complete monitoring of the auctions from Allegro and eBay",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
  {
    text: "Commission refund form for unpaid Allegro transaction",
    isEmailEnabled: true,
    isSMSEnabled: false,
  },
];

export const settingsNavItems = [
  { textKey: "navigation.layout", route: "/settings/layout" },
  {
    textKey: "navigation.generalSettings",
    route: "/settings/general-settings",
  },
  {
    textKey: "navigation.personalizedMessages",
    route: "/settings/personalised-messages",
  },
  { textKey: "navigation.payments", route: "/settings/payment-history" },
  { textKey: "navigation.changePassword", route: "/settings/change-password" },
];

export const accountSettingsData = [
  {
    text: "Username (if you want to change this address, contact us)",
    placeholder: "sample username",
    id: "Username",
    readOnly: true,
  },
  {
    text: "First name",
    placeholder: "Tekena",
    id: "First name",
  },
  {
    text: "Last name",
    placeholder: "West",
    id: "Last Name",
  },
  {
    text: "Email",
    placeholder: "techiewestly@gmail.com",
    id: "email",
    type: "email",
  },
];
export const paymentHistoryHeader = [
  { text: "payment-history.invoice-number", size: "w-[40%]" },
  { text: "payment-history.customer", size: "w-[10%]" },
  { text: "payment-history.amount", size: "w-[10%]" },
  { text: "payment-history.quantity", size: "w-[10%]" },
  { text: "payment-history.date", size: "w-[30%]" },
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

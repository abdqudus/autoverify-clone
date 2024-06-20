export const removeStyle = (ref) => {
  ref.classList.add("animate-slide-out");
};
export const formatDate = (isoDate) => {
  // Create a Date object from the ISO date string
  const date = new Date(isoDate);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract date components
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Construct the formatted date string
  const formattedDate = `${month} ${day}, ${year}, ${hours}:${minutes} ${ampm}`;

  return formattedDate;
};

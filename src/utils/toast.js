import { toast } from "react-toastify";

let config = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
export const toastError = (message, timeout) => {
  if (timeout) {
    config = { ...config, autoClose: timeout };
  }
  toast.error(message, config);
};
export const toastSuccess = (msg) => {
  toast.success(msg, config);
};

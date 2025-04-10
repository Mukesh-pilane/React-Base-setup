import { toast } from "react-toastify";

export const configToast = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
};

export const showSuccessNotification = (message, configToast) => {
  return toast.success(message, configToast);
};

export const showErrorNotification = (message, configToast) => {
  return toast.error(message, configToast);
};

export const showDeleteNotification = (message, configToast) => {
  return toast.success(message, configToast);
};

export const getToken = () => {
  return localStorage?.getItem("token")
}

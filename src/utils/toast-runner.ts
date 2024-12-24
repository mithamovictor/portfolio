import { toast } from "react-toastify";

export const ToastRunner = (toastType: string, message: string) => {
  switch (toastType) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "warn":
      return toast.warn(message);
    case "info":
      return toast.info(message);
    default:
      return;
  }
};

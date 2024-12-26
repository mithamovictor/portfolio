import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/app-context.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </AppProvider>
  </StrictMode>,
);

import Header from "../components/header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer.tsx";

const PublicLayout = () => {
  return (
    <div
      className={
        "flex flex-col justify-between items-center w-full h-full max-w-screen-lg"
      }
    >
      <Header />
      <main
        className={
          "flex justify-between flex-grow w-full p-4 min-h-[79vh] overflow-y-scroll"
        }
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;

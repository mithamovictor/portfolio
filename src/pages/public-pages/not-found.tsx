import Lottie from "lottie-react";
import not_found from "../../assets/lottie/not-found.json";
import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";

const NotFound = () => {
  return (
    <div
      className={
        "flex flex-col justify-between items-center w-full h-full max-w-screen-lg"
      }
    >
      <Header />
      <main className={"flex-1 w-full p-4"}>
        <div
          className={"flex flex-col w-full h-full justify-center items-center"}
        >
          <h2 className={"text-base md:text-lg lg:text-xl text-center mb-4"}>
            Oops! The page you were looking for is missing!
          </h2>
          <Lottie className={"max-w-[400px]"} animationData={not_found} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

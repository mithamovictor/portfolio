import Lottie from "react-lottie";
import not_found from "../../assets/lottie/not-found.json";
import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";

const NotFound = () => {
  const options={
    loop: true,
    autoplay: true,
    animationData: not_found,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div
      className={
        "flex flex-col justify-between items-center w-full h-full max-w-screen-lg"
      }
    >
      <Header />
      <main className={"flex flex-col justify-between flex-grow w-full p-4 min-h-[79vh] overflow-y-scroll"}>
        <div
          className={"flex flex-col w-full h-full justify-center items-center"}
        >
          <h2 className={"text-base md:text-lg lg:text-xl text-center mb-4"}>
            Oops! The page you were looking for is missing!
          </h2>
          <Lottie options={options} style={{width: "100%", maxWidth: "300px"}} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

import { FC } from "react";
import Lottie from "react-lottie";
import comingSoon from "../../assets/lottie/cs.json";

const Blogs: FC = () => {
  const options={
    loop: true,
    autoplay: true,
    animationData: comingSoon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-xl md:text-2xl">Blogs</h1>

      <Lottie style={{width: "100%", maxWidth: "300px"}} options={options} />
    </div>
  );
};

export default Blogs;

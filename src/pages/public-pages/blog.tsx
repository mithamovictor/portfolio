import { FC } from "react";
import Lottie from "lottie-react";
import comingSoon from '../../assets/lottie/cs.json'

const Blogs: FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-xl md:text-2xl">Blogs</h1>

      <Lottie className={'w-full max-w-[400px]'} animationData={comingSoon} />
    </div>
  );
};

export default Blogs;

import ToggleThemeButton from "./ToggleThemeButton";

const SidebarRight = (props) => {
  const { url, alt, width, height, lazyLoading } = props.logo;
  return (
    <div className="flex flex-col justify-start lg:justify-center items-center w-full lg:max-w-side-bar p-4">
      <div className="flex w-full justify-between items-center my-8">
        <img
          className="logo"
          src={url}
          alt={alt}
          width={width}
          height={height}
          loading={lazyLoading ? "lazy" : ""}
        />
        <ToggleThemeButton />
      </div>
      <h1 className="text-lg font-bold text-center uppercase mt-4 mb-2 text-chocolate dark:text-cream w-full">
        <hr />
        &#9733; Karungaru Mithamo &#9733;
        <hr />
      </h1>
      <h2 className="text-chocolate dark:text-cream text-sm italic">
        (&nbsp;Victor&nbsp;)
      </h2>
      <ul className="flex flex-col w-full my-8 text-center italic text-sm">
        <li className="flex justify-center items-center w-full relative my-4">
          <p className="flex absolute bg-cream text-chocolate dark:text-slate-900 py-1 px-4 rounded-full">
            Full Stack Developer
          </p>
          <hr className="w-full text-gray-300 dark:text-gray-700" />
        </li>
        <li className="flex justify-center items-center w-full relative my-4">
          <p className="flex absolute bg-cream text-chocolate dark:text-slate-900 py-1 px-4 rounded-full">
            Software Engineer
          </p>
          <hr className="w-full text-gray-300 dark:text-gray-700" />
        </li>
        <li className="flex justify-center items-center w-full relative my-4">
          <p className="flex absolute bg-cream text-chocolate dark:text-slate-900 py-1 px-4 rounded-full">
            Web Developer
          </p>
          <hr className="w-full text-gray-300 dark:text-gray-700" />
        </li>
      </ul>
      <a
        className="text-chocolate dark:text-cream text-sm hover:text-gray-600 py-1 px-4 rounded-full"
        href="mailto:vickarungaru@gmail.com"
      >
        vickarungaru@gmail.com
      </a>
      <div className="grid grid-cols-4 gap-4 my-8">
        <a
          className="flex justify-center items-center text-chocolate dark:text-cream text-2xl hover:text-gray-600 active:text-gray-600 focus:text-gray-600  w-10 h-10 align rounded-full"
          href="https://twitter.com/Karungaru_M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="flex justify-center items-center text-chocolate dark:text-cream text-2xl hover:text-gray-600 active:text-gray-600 focus:text-gray-600  w-10 h-10 align rounded-full"
          href="https://codepen.io/karungarum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a
          className="flex justify-center items-center text-chocolate dark:text-cream text-2xl hover:text-gray-600 active:text-gray-600 focus:text-gray-600  w-10 h-10 align rounded-full"
          href="https://www.linkedin.com/in/karungaru-mithamo-030646b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="flex justify-center items-center text-chocolate dark:text-cream text-2xl hover:text-gray-600 active:text-gray-600 focus:text-gray-600- w-10 align rounded-full"
          href="https://github.com/mithamovictor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default SidebarRight;

import Image from "../Image";

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center lg:flex-row mb-8"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-center text-chocolate text-2xl dark:text-cream mt-16 mb-4 leading-10 w-full">
          Hi there, I'm a Full Stack Engineer based in Nairobi, Kenya
        </p>
        <p className="text-center w-full text-chocolate dark:text-cream mb-4">
          I've been working with the web for 5 years, building responsive
          websites and web apps. I love writing CSS, HTML and progressive
          JavaScript, and enjoy working on performance, accessibility, modern
          static site generation and stunning interfaces.
        </p>
        <a
          className="flex justify-center items-center w-full text-center bg-cream text-chocolate text-sm md:text-base p-2 mt-8 rounded-full shadow-lg max-w-xs"
          href="/resume/Resume.pdf"
          download={true}
        >
          My CV / Resume
          <i className="ml-2 fa-solid fa-download"></i>
        </a>
      </div>
      <div className="flex justify-center w-full">
        <Image
          className="flex max-w-sm z-10 p-6 pb-0 animate-pulse"
          src="/img/vic_portfolio_2.png"
          alt="Karungaru Mithamo"
          width="100%"
          height="auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;

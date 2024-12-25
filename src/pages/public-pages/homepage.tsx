import { NavigateFunction, useNavigate } from "react-router-dom";
import image from "../../assets/img/vic.png";
import Projects from "../../components/projects";
import projectData from "../../assets/data/project-lists.json";

const Homepage = () => {
  const navigate: NavigateFunction = useNavigate();
  const years: number = new Date().getFullYear() - 2017;

  const redirectToContact = () => {
    return navigate("/contact", { replace: true });
  };

  return (
    <>
      <div className="text-center mb-8">
        <div className="flex justify-center mb-8 md:mb-12 animate__animated animate__bounceIn">
          <img className={"rounded-full w-48 h-48"} src={image} alt="Image" />
        </div>
        <h6 className="font-medium text-md md:text-2xl uppercase mb-4 md:mb-8 animate__animated animate__fadeIn">
          Victor Mithamo
        </h6>
        <h1 className="font-normal text-2xl md:text-4xl leading-none mb-4 md:mb-8 animate__animated animate__fadeIn">
          Full Stack Developer
        </h1>
        <p className="font-normal text-justify md:text-center hyphens-auto text-sm md:text-md mb-8">
          I have a passion for software development with {years} years of
          experience. I enjoy creating tools that make life easier for people
          using React, NestJs and Springboot. On the frontend, I specialize in
          building dynamic, user-friendly interfaces using React, leveraging its
          component-based architecture to create scalable and maintainable
          applications. On the backend, I utilize NestJS for efficient, scalable
          APIs and microservices, combining the flexibility of Node.js with
          TypeScript&rsquo;s strong typing. Additionally, I bring expertise in
          Spring Boot, crafting robust, enterprise-grade applications with a
          focus on clean architecture, security, and seamless database
          integration. I thrive at bridging the gap between front-end
          experiences and back-end logic, ensuring applications are performant,
          scalable, and user-centric.
        </p>
        <button
          className="px-4 py-2 font-medium md:font-semibold text-sm rounded-md transition ease-linear duration-500 w-full md:w-40"
          onClick={redirectToContact}
        >
          Hire me
        </button>
      </div>

      <Projects projectList={projectData} />
    </>
  );
};

export default Homepage;

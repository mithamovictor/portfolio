import { FC, useRef, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import ProjectDetailsModal from "./project-details-modal";
import { Button } from "flowbite-react";

type ProjectListType = {
  projectList: Array<{
    title: string;
    url: string;
    year: string;
    description: string;
  }>;
};

const Projects: FC<ProjectListType> = ({ projectList }) => {
  const [openModal, setOpenModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});
  const navigate: NavigateFunction = useNavigate();

  const redirectToPortfolio = () => navigate("/projects", { replace: true });

  const handleOpenModal = (project: any) => {
    setProjectDetails(project);
    return setOpenModal(true);
  };

  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-8 w-full">
          <div className="w-full md:w-1/3">
            <h1 className="font-medium text-center md:text-left text-3xl md:text-4xl mb-5">
              Portfolio
            </h1>

            <p className="font-normal text-xs md:text-base">
              Here is a list of some of my past work.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-2/3">
            {projectList.map((project: Record<string, string>, idx: number) => (
              <>
                <div
                  className="flex space-x-6 py-2 px-0 border-0 border-b border-gray-200"
                  key={idx}
                >
                  <div className="flex flex-col w-full">
                    <div
                      className={"flex flex-row justify-between items-end mb-1"}
                    >
                      <a
                        className="font-bold text-base text-wrap cursor-pointer border-0 bg-transparent p-0"
                        href="#"
                        role="button"
                        onClick={() => handleOpenModal(project)}
                      >
                        {project?.title}
                      </a>
                      <p className="text-xs font-semibold italic underline">
                        {project?.year}
                      </p>
                    </div>

                    <p className="font-normal text-sm text-wrap hyphens-auto">
                      {project?.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <ProjectDetailsModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            projectDetails={projectDetails}
          />
        </div>
        <button
          className="px-4 py-2 font-medium md:font-semibold text-sm rounded-md transition ease-linear duration-500 w-full md:w-40"
          onClick={redirectToPortfolio}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Projects;

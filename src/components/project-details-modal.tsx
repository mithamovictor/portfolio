import { FC } from "react";
import { Modal } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetailsModal: FC<any> = ({
  openModal,
  setOpenModal,
  projectDetails,
}) => {
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Modal
      className={`animate__animated ${openModal ? "animate__zoomIn" : "animate__zoomOut"}`}
      show={openModal}
      onClose={handleCloseModal}
    >
      <Modal.Header>
        <h4>Title: {projectDetails?.title}</h4>
        <p className="text-xs">
          Year: <i>{projectDetails?.year}</i>
        </p>
      </Modal.Header>
      <Modal.Body>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          {projectDetails?.description}
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          The European Union’s General Data Protection Regulation (G.D.P.R.)
          goes into effect on May 25 and is meant to ensure a common set of data
          rights in the European Union. It requires organizations to notify
          users as soon as possible of high-risk data breaches that could
          personally affect them.
        </p>
      </Modal.Body>
      <Modal.Footer>
        {projectDetails?.url === "#" || projectDetails?.url === undefined ? (
          <></>
        ) : (
          <a
            className="flex flex-row items-center gap-2"
            href={projectDetails?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <FaExternalLinkAlt className="text-sm" />
          </a>
        )}
        {/* <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetailsModal;

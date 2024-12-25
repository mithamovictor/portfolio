import { FaEnvelope } from "react-icons/fa";
import ContactForm from "../../components/contact-form";

const Contact = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-xl md:text-2xl">Contact Me</h1>
      <a
        href="mailto:hello@mithamo.cc"
        className="flex items-center text-center whitespace-nowrap mt-2"
      >
        <FaEnvelope className="mr-2" /> hello@mithamo.cc
      </a>

      <ContactForm />
    </div>
  );
};

export default Contact;

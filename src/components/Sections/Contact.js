import ContactForm from "../ContactForm";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  return (
    <section
      id="skillset"
      className="flex flex-col justify-center items-center my-8"
    >
      <SectionTitle title="Contact" />
      <ContactForm />
    </section>
  );
};

export default Contact;

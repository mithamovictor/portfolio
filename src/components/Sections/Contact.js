import ContactForm from "../ContactForm";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  return (
    <section
      id="skillset"
      className="flex flex-col justify-center items-center my-8"
    >
      <SectionTitle title="Contact" />
      <h3 className="text-2xl text-chocolate dark:text-cream">
        Hire me for your next project
      </h3>
      <ContactForm />
    </section>
  );
};

export default Contact;

import { useState } from "react";
import axios from "axios";
import { ToastRunner } from "../utils/toast-runner";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setHasError(false);

    if (name === "" || email === "" || message === "" || hasError) {
      setHasError(true);
      setLoading(false);
      return ToastRunner("error", "Oops! We found some errors!");
    }

    let data = {
      name,
      subject: "PORTFOLIO CONTACT FORM",
      email,
      message,
    };
    axios
      .post(
        // "https://murmuring-tundra-30668.herokuapp.com/send",
        "http://localhost:3002/send",
        data,
      )
      .then((response) => {
        if (response.data.status === "success") {
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setHasError(false);
          return ToastRunner("success", "Message sent successfully.");
        }
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setHasError(true);
        return ToastRunner("error", resMessage);
      });
  };

  return (
    <form
      id="contact_form"
      className="flex flex-col justify-center items-center w-full max-w-screen-sm mt-12"
    >
      <input
        className="flex bg-transparent border border-b border-gray-300 text-sm md:text-base p-2 rounded-md w-full focus:outline-0 focus:ring-0 focus:border-chocolate dark:focus:border-cream text-chocolate dark:text-cream"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
      />
      {hasError && name === "" && (
        <span className="flex text-red-800 dark:text-red-400 text-xs mt-1 w-full">
          Please enter a valid name!
        </span>
      )}
      <input
        className="flex bg-transparent border border-b border-gray-300 text-sm md:text-base mt-8 p-2 rounded-md w-full focus:outline-0 focus:ring-0 focus:border-chocolate dark:focus:border-cream text-chocolate dark:text-cream"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />
      {hasError && email === "" && (
        <span className="flex text-red-800 dark:text-red-400 text-xs mt-1 w-full">
          Please enter a valid email!
        </span>
      )}
      <textarea
        className="flex bg-transparent border border-b border-gray-300 text-sm md:text-base mt-8 p-2 rounded-md w-full focus:outline-0 focus:ring-0 focus:border-chocolate dark:focus:border-cream text-chocolate dark:text-cream"
        name="message"
        id="message"
        rows={8}
        placeholder="Message"
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
        required
      />
      {hasError && message === "" && (
        <span className="flex text-red-800 dark:text-red-400 text-xs mt-1 w-full">
          Please enter a message!
        </span>
      )}
      <button
        type="button"
        disabled={loading}
        className="flex justify-center items-center w-full max-w-xs text-center bg-cream text-chocolate p-2 mt-8 rounded-full shadow-lg text-sm md:text-base"
        onClick={handleSubmit}
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin mr-2" /> Sending...
          </>
        ) : (
          <>
            <FaPaperPlane className="mr-2" /> Send
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

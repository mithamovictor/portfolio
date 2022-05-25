import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { isEmail } from "validator";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: "",
      nameErr: false,
      email: "",
      emailErr: false,
      message: "",
      messageErr: false,
    };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ name: value });
  }

  emailChange(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ emailErr: false });
    !isEmail(value) && this.setState({ emailErr: true });
    this.setState({ email: value });
  }

  messageChange(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ message: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, nameErr, email, emailErr, message, messageErr } = this.state;
    this.setState({ loading: true });

    if (
      name.length > 0 &&
      email.length > 0 &&
      message.length > 0 &&
      !nameErr &&
      !emailErr &&
      !messageErr
    ) {
      let data = {
        name,
        subject: "PORTFOLIO CONTACT FORM",
        email,
        message,
      };
      axios
        .post(
          "https://murmuring-tundra-30668.herokuapp.com/send",
          // 'http://localhost:3002/send',
          data
        )
        .then((response) => {
          if (response.data.status === "success") {
            toast.success("Message sent successfully.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
            this.setState({
              loading: false,
              name: "",
              nameErr: false,
              email: "",
              emailErr: false,
              message: "",
              messageErr: false,
            });
          }
        })
        .catch((error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          toast.error(resMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          this.setState({
            loading: false,
          });
        });
    } else {
      name.length === 0 && this.setState({ nameErr: true, loading: false });
      email.length === 0 && this.setState({ emailErr: true, loading: false });
      message.length === 0 &&
        this.setState({ messageErr: true, loading: false });
    }
  }

  render() {
    const { name, nameErr, email, emailErr, message, messageErr, loading } =
      this.state;
    return (
      <form
        id="contact_form"
        className="flex flex-col justify-center items-center w-full max-w-screen-sm mt-12"
      >
        <input
          className="flex bg-transparent border border-b border-gray-300 text-sm md:text-base p-2 rounded-md w-full focus:outline-0 focus:ring-0 focus:border-chocolate dark:focus:border-cream text-chocolate dark:focus:text-cream"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={this.nameChange}
          required
        />
        {nameErr && (
          <span className="flex text-red-800 dark:text-red-400 text-xs mt-1 w-full">
            Please enter a valid name!
          </span>
        )}
        <input
          className="flex bg-transparent border border-b border-gray-300 text-sm md:text-base mt-8 p-2 rounded-md w-full focus:outline-0 focus:ring-0 focus:border-chocolate dark:focus:border-cream text-chocolate dark:focus:text-cream"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={this.emailChange}
          required
        />
        {emailErr && (
          <span className="flex text-red-800 dark:text-red-400 text-xs mt-1 w-full">
            Please enter a valid email!
          </span>
        )}
        <textarea
          className="flex bg-transparent border border-b border-gray-300 text-sm md:text-base mt-8 p-2 rounded-md w-full focus:outline-0 focus:ring-0 focus:border-chocolate dark:focus:border-cream text-chocolate dark:focus:text-cream"
          name="message"
          id="message"
          rows="8"
          placeholder="Message"
          onChange={this.messageChange}
          value={message}
          required
        />
        {messageErr && (
          <span className="flex text-red-800 dark:text-red-400 text-xs mt-1 w-full">
            Please enter a message!
          </span>
        )}
        <button
          disabled={loading}
          className="flex justify-center items-center w-full max-w-xs text-center bg-cream text-chocolate p-2 mt-8 rounded-full shadow-lg text-sm md:text-base"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

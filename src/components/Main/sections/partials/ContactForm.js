import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { isEmail } from 'validator'

import 'react-toastify/dist/ReactToastify.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      name: '',
      nameErr: false,
      email: '',
      emailErr: false,
      message: '',
      messageErr: false
    }
    this.nameChange = this.nameChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.messageChange = this.messageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  nameChange(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({ name: value })
  }

  emailChange(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({ emailErr: false })
    !isEmail(value) && this.setState({ emailErr: true })
    this.setState({ email: value })
  }

  messageChange(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({ message: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, nameErr, email, emailErr, message, messageErr } = this.state
    this.setState({ loading: true })

    if(name.length > 0 && email.length > 0 && message.length > 0 && !nameErr && !emailErr && !messageErr ) {
      let data = {
        name,
        subject: 'PORTFOLIO CONTACT FORM',
        email,
        message
      }
      axios.post(
        'https://murmuring-tundra-30668.herokuapp.com/send',
        // 'http://localhost:3002/send',
        data
      ).then(response=>{
        if( response.data.status === 'success' ) { 
          toast.success('Message sent successfully.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
          })
          this.setState({ 
            loading: false,
            name: '',
            nameErr: false,
            email: '',
            emailErr: false,
            message: '',
            messageErr: false
          })
        }
      }).catch(error=>{
        const resMessage = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        toast.error(resMessage, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        this.setState({ 
          loading: false
        })
      })
    } else {
      name.length === 0 && this.setState({ nameErr: true, loading: false })
      email.length === 0 && this.setState({ emailErr: true, loading: false })
      message.length === 0 && this.setState({ messageErr: true, loading: false })
    }
  }

  render() {
    let { name, nameErr, email, emailErr, message, messageErr, loading } = this.state
    return (
      <div className="contact_form">
        <ToastContainer />
        <form id="contact_form">
          <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={this.nameChange} required />
          {nameErr && <span className="form_error">Please enter a valid name</span>}
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.emailChange} required />
          {emailErr && <span className="form_error">Please enter a valid email</span>}
          <textarea name="message" id="message" rows="8" placeholder="Message" onChange={this.messageChange} value={message} required  />
          {messageErr && <span className="form_error">Please enter a message</span>}
          <button disabled={loading} className="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
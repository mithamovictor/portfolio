import React from 'react'
import ContactForm from './partials/ContactForm'

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <h2 className="section_heading">Contact <span className="yellow">Me</span></h2>
      <div className="contact_details">
        <div className="contact_box">
          <div className="contact_icon">
            <i className="fas fa-envelope yellow"></i>
          </div>
          <div className="contact">
            <p className="yellow">vickarungaru@gmail.com</p>
          </div>
        </div>
        <div className="contact_box">
          <div className="contact_icon">
            <i className="fas fa-phone-volume yellow"></i>
          </div>
          <div className="contact">
            <p className="yellow">+254722402438</p>
          </div>
        </div>
        <div className="contact_box">
          <div className="contact_icon">
            <i className="fab fa-skype yellow"></i>
          </div>
          <div className="contact">
            <p className="yellow">vickarungaru_2</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}

export default Contact
import React from 'react'
import ContactForm from './partials/ContactForm'

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <h2 className="section_heading">Hire <span className="yellow">Me</span></h2>
      <div className="contact_details">
        <a className="contact_box" href='mailto:vickarungaru@gmail.com'>
          <div className="contact_icon">
            <i className="fas fa-envelope yellow"></i>
          </div>
          <div className="contact">
            <p className="yellow">vickarungaru@gmail.com</p>
          </div>
        </a>
        <a className="contact_box" href='tel:+254722402438'>
          <div className="contact_icon">
            <i className="fas fa-phone-volume yellow"></i>
          </div>
          <div className="contact">
            <p className="yellow">+254 (0) 722 402 438</p>
          </div>
        </a>
        <a className="contact_box" href='skype:vickarungaru_2'>
          <div className="contact_icon">
            <i className="fab fa-skype yellow"></i>
          </div>
          <div className="contact">
            <p className="yellow">vickarungaru_2</p>
          </div>
        </a>
      </div>
      <ContactForm />
    </section>
  )
}

export default Contact
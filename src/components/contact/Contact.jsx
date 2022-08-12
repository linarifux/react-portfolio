import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email. 👋 </p>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form_group">
            <div className="contact_form_div">
              <input type="text" className="contact_form_input" placeholder='Insert your name' />
            </div>
            <div className="contact_form_div">
              <input type="email" className="contact_form_input" placeholder='Insert your email' />
            </div>
          </div>
          <div className="contact_form_div">
            <input type="text" className="contact_form_input" placeholder='Insert your subject' />
          </div>
          <div className="contact_form_div contact_form_area">
            <textarea name="" id="" cols="30" rows="10" className='contact_form_input' placeholder='Write your message'></textarea>
          </div>
          <div className="primary_btn"><button className="btn">Send Message</button></div>
        </form>
      </div>
    </section>
  )
}

export default Contact
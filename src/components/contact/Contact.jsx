import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { useState } from 'react';

const Contact = () => {

  const user = {
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  }

  const [userInfo, setUserInfo] = useState(user)

  const [isSuccess, setIsSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  const onchangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }


  const closeModal = () => {
    setTimeout(() => {
      setIsSuccess(false)
      setWarning(false)
    }, 3000)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!(userInfo.user_name || userInfo.user_email || userInfo.subject || userInfo.message)) {
      setWarning(true)
      closeModal()
    } else {
      if (!warning) {
        emailjs.sendForm('service_69fxrq7', 'template_pheytsq', form.current, 'dmIIhzlrVqxGafq_-')
          .then((result) => {
            setIsSuccess(true)
            closeModal()
            setUserInfo(user)
          }, (error) => {
            setWarning(false)
            closeModal()
          });
      }
    }
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email. 👋 </p>
        </div>

        <form ref={form} className="contact_form" onSubmit={sendEmail}>
          {isSuccess && <div className="success">Message Sent</div>}
          {warning && <div className="warning">Something Went Wrong!</div>}
          <div className="contact_form_group">
            <div className="contact_form_div">
              <input type="text" className="contact_form_input" placeholder='Insert your name' name='user_name' onChange={e => onchangeHandler(e)} value={userInfo.user_name}/>
            </div>
            <div className="contact_form_div">
              <input type="email" className="contact_form_input" placeholder='Insert your email' name='user_email' onChange={e => onchangeHandler(e)} value={userInfo.user_email} />
            </div>
          </div>
          <div className="contact_form_div">
            <input type="text" className="contact_form_input" name='subject' placeholder='Insert your subject' onChange={e => onchangeHandler(e)} value={userInfo.subject} />
          </div>
          <div className="contact_form_div contact_form_area">
            <textarea name="message" id="" cols="30" rows="10" className='contact_form_input' placeholder='Write your message' onChange={e => onchangeHandler(e)} value={userInfo.message}></textarea>
          </div>
          <div className="primary_btn"><button className="btn">Send Message</button></div>
        </form>
      </div>
    </section>
  )
}

export default Contact
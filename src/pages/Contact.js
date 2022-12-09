import React, { useRef } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "../css/contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const refFrom = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        'service_8cvd6my',
        'template_9h7ykij',
        refFrom.current,
        '9vatNBdk8aCbVC7HF'
    )
    .then(
        () => {
            alert('Message sucessfully sent!')
            console.log('sucess')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, Please try again ')
            console.log("failed")
        }
    )
}
  return (
    <>
      <Header />
      <p className="contact-head">Contact</p>
      <div className="contact">
        <div className="contact-left">
          <h3>IslandxFans.biz</h3>
          <h3>180 Sansome St, San Francisco, CA 94104, USA </h3>

          <p>Please reach out to us for any concerns you may be facing using the contact form alongside.</p>
          <p>We usually respond within two business days.</p>
          
        </div>

        <div className="contact-right">

          <form ref={refFrom} onSubmit={sendEmail}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              required
            />
             <textarea
              type="text"
              name="message"
              id="message"
              className="form-message"
              placeholder="Your Message"
              required
            />
             <input type="submit" className='flat-button' value="SEND" />
            
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

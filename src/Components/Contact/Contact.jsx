import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <section className="contact-section" id="contact">

      <div className="section-header">
        <h2>Contact</h2>
        <div className="underline"></div>
        <p>Take the next step toward smarter, faster business management.</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="contact-info">
          <h3>Contact Info</h3>

          <div className="info-item">
            <h4>📍 Our Locations</h4>
            <p>1) Dashmesh Complex, Hadapsar</p>
            <p>2) Kesnand, Wagholi</p>
            <p>3) Office No. 527, Amanora Chambers</p>
          </div>

          <div className="info-item">
            <h4>📞 Phone Number</h4>
            <p>80876 11678</p>
            <p>75582 74199</p>
          </div>

          <div className="info-item">
            <h4>✉ Email Address</h4>
            <p>enquiry@trueerp.in</p>
            <p>sales@trueerp.in</p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="contact-form">
          <h3>Get In Touch</h3>
          <p>Don't wait. Automate your entire workflow effortlessly.</p>

          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Message" rows="5"></textarea>

          <button className="send-btn">
            Send Message
          </button>
        </div>

      </div>

    </section>
    </div>
  )
}

export default Contact

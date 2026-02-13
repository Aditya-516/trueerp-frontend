import React from 'react'
import './About.css'
import aboutMain from '../../assets/about_main.png'
import aboutOverlay from '../../assets/about_overlay.png'
const About = () => {
  return (
    <div className='about'>
      <section className="about-section" id="about">
      <div className="about-left">
        <h5 className="section-tag">MORE ABOUT US</h5>

        <h2>
          Powering Efficiency. Driving Growth.
          <br />
          Simplifying Operations.
        </h2>

        <p>
          TRUEERP is a next-generation ERP solution built specifically
          for the mechanical and manufacturing sector. It brings every
          part of your business — from quotations to payroll — into one
          smart, automated, and data-driven platform.
        </p>

        <div className="about-features">
          <ul>
            <li>✔ Centralized Data Management</li>
            <li>✔ Accuracy & Error Reduction</li>
            <li>✔ Real-Time Insights</li>
            <li>✔ Improved Collaboration</li>
            <li>✔ Scalability</li>
          </ul>

          <ul>
            <li>✔ Automation of Processes</li>
            <li>✔ Enhanced Security</li>
            <li>✔ Audit & Traceability</li>
            <li>✔ Integration with Other Systems</li>
            <li>✔ Professional Reporting & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="about-right">
        <div className="image-container">
          <img src={aboutMain} alt="Main" className="main-img" />
          {/* <img src={aboutOverlay} alt="Overlay" className="overlay-img" /> */}

          <div className="experience-box">
            <h3>15+</h3>
            <p>Years Of experience in business service</p>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About

import React from 'react'
import './Hero.css'
import heroImg from '../../assets/images.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
      <section className="hero-section">
      <div className="hero-left">
        <span className="badge">
          ⚙ Working for your success
        </span>

        <h1>
          Smart ERP for the <br />
          Manufacturing & <br />
          <span className="highlight">
            Mechanical Industry!
          </span>
        </h1>

        <p>
          The TRUEERP team - Powering India's Manufacturing Eco System.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            DOWNLOAD BROCHURE
          </button>

          <button className="video-btn">
            ▶ Play Video
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="ERP Illustration" />
      </div>
    </section>
    </div>
  )
}

export default Hero

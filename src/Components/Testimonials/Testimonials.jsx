import React from 'react'
import './testimonials.css'
const Testimonials = () => {
  return (
    <div className='testimonials'>
      <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <div className="underline"></div>
        <p>
          Trusted by leading mechanical manufacturers across India.
        </p>
      </div>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Tanaji Tengale</h4>
              <span>CEO & Founder</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <p className="review">
            "TRUEERP has streamlined our entire workflow from
            quotations to dispatch. Our team now works faster
            and with zero paperwork."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Ganesh Chandak</h4>
              <span>Industrialist</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <p className="review">
            "The dashboards give us real-time visibility of sales,
            purchases, and expenses. Decision-making has become
            much easier."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Sharad Dethe</h4>
              <span>Store Owner</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <p className="review">
            "Managing BOM and production used to be chaotic.
            With TRUEERP, everything is organized and traceable
            in one place."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <h4>Nitin Rajwade</h4>
              <span>Purchase Head</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <p className="review">
            "Excellent support and easy-to-use interface.
            TRUEERP helped reduce errors and improve productivity."
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonials

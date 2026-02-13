import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <footer className="footer-section">

      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <h3>TRUEERP</h3>
          <p>
            Smart ERP solution built for the Manufacturing
            & Mechanical Industry.
          </p>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶</span>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Sales & Quotation</li>
            <li>Inventory Management</li>
            <li>Manufacturing / MRP</li>
            <li>Payroll & HR</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Pune, Maharashtra</p>
          <p>80876 11678</p>
          <p>enquiry@trueerp.in</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TRUEERP. All Rights Reserved.
      </div>

    </footer>
    </div>
  )
}

export default Footer

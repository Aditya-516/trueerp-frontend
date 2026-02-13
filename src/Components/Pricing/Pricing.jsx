import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <div className='pricing'>
      return (
    <section className="pricing-section" id="pricing">
      <div className="section-header">
        <h2>Pricing</h2>
        <div className="underline"></div>
        <p>
          Flexible pricing designed for every manufacturing business.
        </p>
      </div>

      <div className="pricing-grid">

        {/* CARD 1 */}
        <div className="price-card">
          <h3>Small-Scale Businesses & Startups</h3>

          <ul>
            <li>✔ Dashboard & Core Reports</li>
            <li>✔ Sales & Quotation Module</li>
            <li>✔ Purchase Order Management</li>
            <li>✔ Basic Inventory Management</li>
            <li>✔ Customer & Supplier Master</li>
            <li>✔ GST-enabled Invoicing</li>
            <li>✔ Backup & Basic Security</li>
            <li>✔ 3 Months Free Support</li>
          </ul>

          <button className="buy-btn">Buy Now →</button>
        </div>

        {/* CARD 2 - FEATURED */}
        <div className="price-card featured">
          <span className="popular-badge">Most Popular</span>

          <h3>Growing Medium-Scale Companies</h3>

          <ul>
            <li>✔ Advanced Inventory & Stock Alerts</li>
            <li>✔ Bill of Material (BOM)</li>
            <li>✔ Manufacturing / MRP Module</li>
            <li>✔ Payroll & HR Module</li>
            <li>✔ Project & Job Costing</li>
            <li>✔ Multi-User Access (up to 20)</li>
            <li>✔ Email/SMS Integration</li>
            <li>✔ 6 Months Free Support</li>
          </ul>

          <button className="buy-btn white-btn">
            Buy Now →
          </button>
        </div>

        {/* CARD 3 */}
        <div className="price-card">
          <h3>Large Manufacturing & Multi-Branch</h3>

          <ul>
            <li>✔ Multi-Branch / Multi-Company</li>
            <li>✔ Advanced Dashboard with KPIs</li>
            <li>✔ CRM & Sales Automation</li>
            <li>✔ eCommerce Integration</li>
            <li>✔ Advanced Payroll (Attendance + Leaves)</li>
            <li>✔ GST, TDS & Compliance Reports</li>
            <li>✔ Unlimited Users</li>
            <li>✔ Priority Support (1 Year)</li>
          </ul>

          <button className="buy-btn">Buy Now →</button>
        </div>

      </div>
    </section>

    </div>
  )
}

export default Pricing

import React from 'react'
import './Features.css'
const Features = () => {
  return (
    <div className='features'>
      <section className="features-section" id="features">
      <div className="features-header">
        <h2>Features</h2>
        <div className="underline"></div>
        <p>
          Features of TRUEERP - Smart ERP for the Manufacturing &
          Mechanical Industry
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Finance</h3>
          <p>Manage accounting, GST, invoicing and financial reports.</p>
        </div>

        <div className="feature-card">
          <h3>Purchasing</h3>
          <p>Handle purchase orders, vendors and supplier payments.</p>
        </div>

        <div className="feature-card">
          <h3>Manufacturing</h3>
          <p>Track production planning, BOM and shop floor management.</p>
        </div>

        <div className="feature-card">
          <h3>MRP</h3>
          <p>Material requirement planning and demand forecasting.</p>
        </div>

        <div className="feature-card">
          <h3>Inventory Management</h3>
          <p>Stock tracking, warehouse control and batch management.</p>
        </div>

        <div className="feature-card">
          <h3>CRM</h3>
          <p>Manage leads, quotations and customer lifecycle tracking.</p>
        </div>

        <div className="feature-card">
          <h3>Human Resources</h3>
          <p>Employee management, attendance and payroll system.</p>
        </div>

        <div className="feature-card">
          <h3>Analytics & Reporting</h3>
          <p>Real-time dashboards and performance insights.</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features

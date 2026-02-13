import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div className='services'>
      <section className="services-section" id="services">
      <div className="services-header">
        <h2>Services</h2>
        <div className="underline"></div>
        <p>
          Comprehensive ERP solutions designed to simplify and automate
          your business operations.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="icon">📊</div>
          <h3>Quotation & Sales Management</h3>
          <p>
            Create, customize, and track quotations and sales orders
            seamlessly from inquiry to dispatch.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📦</div>
          <h3>Purchase & Inventory Management</h3>
          <p>
            Manage vendors, purchase orders, stock levels, and warehouse
            tracking efficiently.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">👨‍💼</div>
          <h3>Payroll & HR Management</h3>
          <p>
            Automate employee records, attendance tracking, payroll
            processing, and compliance.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📈</div>
          <h3>Dashboard & Analytics</h3>
          <p>
            Gain real-time insights through interactive dashboards,
            reports, and performance tracking.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services

import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>
      <div className="contact-card">
        <h2>Laxman Sharma</h2>
        <p>Mobile: +91 63504 62454</p>
        <p>Email: laxman.sharma.che21@itbhu.ac</p>
      </div>
      <div className="contact-card">
        <h2>Mahesh Pawar</h2>
        <p>Mobile: +91 98765 43211</p>
        <p>Email:mahesh.pawar.che21@itbhu.ac.in</p>
      </div>
      <div className="contact-card">
        <h2>Md Nasir Hussain</h2>
        <p>Mobile: +91 75420 85728</p>
        <p>Email:mdnasir.hussain.che21@itbhu.ac.in </p>
      </div>
    </div>
  )
}

export default Contact
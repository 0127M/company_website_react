import React, { useState } from 'react';
import "./Contact.css"


// function Contact() {
//     return (<>
//         <div className="container">
//             <div className="about_heading">
//                 <h1 className="about_us">Contact</h1>
//                 <h5>Our clients consistently rave about the exceptional quality of work</h5>

//                 <div className="col-2">
//                     <div className="line"></div>
//                 </div>
//             </div>

//         </div>


//     </>);
// }

// export default Contact;


// GetInTouchPage.js


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData);
    // Optionally, reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (

        <>
            <div className="container">
            <div className="about_heading">
                <h1 className="about_us">Stay In Touch</h1>
                <h5>Stay connected with us with the latest industry news, special offers, and exciting updates. Reach out to us today!</h5>
            </div>

        </div>
    <div className="get-in-touch-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Contact;

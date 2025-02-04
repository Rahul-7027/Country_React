import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(data);  // Log the form data instead of the event
  };

  return (
    <div>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form onSubmit={handleFormSubmit}> {/* Changed from action to onSubmit */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.username}
            />

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.email}
            />

            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
              onChange={handleChange}
              value={data.message}
            ></textarea>

            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

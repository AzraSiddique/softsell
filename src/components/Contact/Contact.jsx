import React, { Component } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
      errors: {},
    };
  }

  validateForm = () => {
    const { name, email, message } = this.state;
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      errors.email = "Valid email is required";
    if (!message) errors.message = "Message is required";
    return errors;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      alert("Form submitted!");
      this.setState({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
        errors: {},
      });
    }
  };

  render() {
    const { name, email, company, licenseType, message, errors } = this.state;

    return (
      <section className="contact-section py-5" id="contact">
        <div className="container">
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <div className="row align-items-center">
            {/* Animation Column */}
            <motion.div
              className="col-md-6 text-center mb-4 mb-md-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <DotLottieReact
                src="https://lottie.host/15793616-7d65-42ce-b530-f0bd2f50d45c/3WThleKSLP.lottie"
                loop
                autoplay
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </motion.div>

            {/* Form Column */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={this.handleSubmit}
                className="p-4 shadow rounded bg-light"
              >
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label>Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>License Type</label>
                  <select
                    className="form-select"
                    name="licenseType"
                    value={licenseType}
                    onChange={this.handleChange}
                  >
                    <option value="">Select</option>
                    <option value="SaaS">SaaS</option>
                    <option value="On-Premise">On-Premise</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  />
                  {errors.message && (
                    <small className="text-danger">{errors.message}</small>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-30">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

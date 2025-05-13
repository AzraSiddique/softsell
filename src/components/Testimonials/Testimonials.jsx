import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonialsList = [
  {
    quote:
      'SoftSell made it so easy to turn our unused licenses into real revenue. Super smooth process!',
    name: 'Jane Doe',
    role: 'IT Procurement',
    company: 'TechNova Inc.',
  },
  {
    quote:
      'The valuation was fast, accurate, and the support team was fantastic throughout. Highly recommended!',
    name: 'David Smith',
    role: 'CTO',
    company: 'CloudGrid Solutions',
  },
];

class Testimonials extends Component {
  renderTestimonials = () => (
    <div className="row justify-content-center">
      {testimonialsList.map((item, index) => (
        <motion.div
          key={`testimonial-${index}`}
          className="col-md-6 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
        >
          <div className="testimonial-card p-4 shadow rounded">
            <i className="bi bi-quote testimonial-quote mb-3"></i>
            <p className="testimonial-text">"{item.quote}"</p>
            <h6 className="mt-3 mb-0">{item.name}</h6>
            <small className="text-muted">
              {item.role}, {item.company}
            </small>
          </div>
        </motion.div>
      ))}
    </div>
  );

  render() {
    return (
      <section className="testimonials py-5" id="testimonials">
        <div className="container text-center">
          <motion.h2
            className="mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          {this.renderTestimonials()}
        </div>
      </section>
    );
  }
}

export default Testimonials;

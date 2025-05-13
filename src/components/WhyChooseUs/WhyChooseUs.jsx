import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const featureList = [
  {
    icon: 'bi-shield-lock',
    title: 'Secure & Trusted',
    description: 'End-to-end encrypted resale process ensures your safety.',
  },
  {
    icon: 'bi-speedometer',
    title: 'Fast Valuations',
    description: 'Get AI-powered quotes in seconds, not days.',
  },
  {
    icon: 'bi-currency-dollar',
    title: 'Competitive Payouts',
    description: 'Receive top market rates for your software licenses.',
  },
  {
    icon: 'bi-headset',
    title: '24/7 Support',
    description: 'Our support team is always available to assist you.',
  },
];

class WhyChooseUs extends Component {
  renderFeatures = () => (
    <div className="row">
      {featureList.map((feature, index) => (
        <motion.div
          className="col-md-6 col-lg-3 mb-4"
          key={`feature-${index}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.15 }}
        >
          <div className="feature-tile p-4 shadow rounded">
            <i className={`bi ${feature.icon} feature-icon mb-3`}></i>
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  render() {
    return (
      <section className="why-choose-us py-5" id="why-us">
        <div className="container text-center">
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          {this.renderFeatures()}
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;

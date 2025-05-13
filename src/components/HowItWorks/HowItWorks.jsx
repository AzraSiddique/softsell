import { Component } from 'react'
import { motion } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    icon: 'bi-cloud-arrow-up',
    title: 'Upload License',
    description: 'Easily upload your software license through our secure portal.',
  },
  {
    icon: 'bi-graph-up',
    title: 'Get Valuation',
    description: 'Our AI quickly estimates a fair resale value for your license.',
  },
  {
    icon: 'bi-cash-stack',
    title: 'Get Paid',
    description: 'Approve the offer and receive instant payment via your preferred method.',
  },
]

class HowItWorks extends Component {
  renderStep = (step, index) => (
    <motion.div
      className="col-md-4 mb-4"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
    >
      <div className="step-card p-4 shadow rounded">
        <i className={`bi ${step.icon} icon mb-3`}></i>
        <h5>{step.title}</h5>
        <p>{step.description}</p>
      </div>
    </motion.div>
  )

  render() {
    return (
      <section className="how-it-works py-5" id="how-it-works">
        <div className="container text-center">
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <div className="row">
            {steps.map((step, index) => this.renderStep(step, index))}
          </div>
        </div>
      </section>
    )
  }
}

export default HowItWorks

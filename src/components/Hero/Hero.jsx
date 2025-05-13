import { Component } from 'react'
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import './Hero.css'

class Hero extends Component {
  renderLeftText = () => (
    <motion.div
      className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="display-4 fw-bold mb-3">
        Turn Unused Software Licenses into Cash
      </h1>
      <p className="lead mb-4">
        SoftSell makes it easy to resell unused licenses securely — fast valuations, fair prices, and zero hassle.
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start gap-3">
        <a href="#contact" className="btn btn-primary btn-lg">Get a Free Valuation</a>
        <a href="#how-it-works" className="btn btn-outline-secondary btn-lg">See How It Works</a>
      </div>
    </motion.div>
  )

  renderRightAnimation = () => (
    <motion.div
      className="col-lg-6 text-center"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <DotLottieReact
        src="https://lottie.host/fb001bb9-8338-4f7b-a01e-ffa862b234a0/A43V4VpYfe.lottie"
        loop
        autoplay
        style={{ width: '100%', maxWidth: '500px' }}
      />
    </motion.div>
  )

  render() {
    return (
      <section className="hero-section text-dark dark:bg-dark d-flex align-items-center" id="hero">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {this.renderLeftText()}
            {this.renderRightAnimation()}
          </div>
        </div>
      </section>
    )
  }
}

export default Hero

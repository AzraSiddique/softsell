import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import ChatWidget from "./components/ChatWidget/ChatWidget";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs/>
      <Testimonials />
      <Contact />
      <ChatWidget />
    </div>
  );
}

export default App;

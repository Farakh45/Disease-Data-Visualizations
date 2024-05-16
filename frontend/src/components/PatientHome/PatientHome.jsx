import React from 'react'
import './PatientHome.css';
import Hero from '../assets/hero-image.svg'


const PatientHome = () => {
  return (
    <div>
      <section className="hero">
      <div className="hero-text">
        <h1>All-Inclusive Living, <br/><span className="hero-text2"> One Platform. </span></h1>
        <p>
        Discover a universe of medical solutions with <span className="hero-text2" style={{fontWeight:"bold"}}>RealSolutions</span>, your comprehensive resource for all things health-related.
From telemedicine consultations to personalized wellness programs, access the care you need with ease.
        </p>
        <br/>
        <p>
         The best companion bot for Diseases Judgment.
        </p>
      </div>

      <div className="hero-image">
        <img src={Hero} alt="Hero Section" />
      </div>
    </section>
    </div>
  )
}

export default PatientHome

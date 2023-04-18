import React from 'react'
import './Hero.css'
import HeroPhoto from '../assets/circles.png'

function Hero() {
  return (
    <div className='Hero_section'>
        <div className="Hero_section_container">
        <div className="Hero_section_text">
            <h5>SUMMER 2020</h5>
            <h1>NEW COLLECTION</h1>
            <p>We know how large objects will act,<br /> but things on a small scale.</p>
            <button className='Hero_section_btn'>SHOP NOW</button>
        </div>
        
        <div className="Hero_section_img">
            <img src={HeroPhoto} alt=""/>
        </div>
        
        </div>

    </div>
  )
}

export default Hero
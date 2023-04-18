import React from 'react'
import './Footer.css'
import Facebook from '../assets/icons/Facebook.svg'
import Twitter from '../assets/icons/Twitter.svg'
import Instagram from '../assets/icons/Instagram.svg'

function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer_container">
            <div className='Footer_container_top'>
                 <div className="Footer_container_logo">
                    <h1>LearnBay Phones</h1>
                 </div>
                <div className="Footer_container_social">
                    <div className="Footer_container_social_item">
                        <a href=""><img src={Facebook} alt="" /></a>
                        <a href=""><img src={Twitter} alt="" /></a>
                        <a href=""><img src={Instagram} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='Footer_container_border'>
                <div className="Footer_container_border_item"></div>
            </div>

            <div className="Footer_container_bottom">
           
                <div className="Footer_container_links">
                    <div className="Footer_container_links_item">
                        <h5>Company Info</h5>
                        <a href="">About Us</a>
                        <a href="">Carrier</a>
                        <a href="">We are Hiring</a>
                        <a href="">Blog</a>
                    </div>
                    <div className="Footer_container_links_item">
                        <h5>Legal</h5>
                        <a href="">About Us</a>
                        <a href="">Carrier</a>
                        <a href="">We are Hiring</a>
                        <a href="">Blog</a>
                    </div>
                    <div className="Footer_container_links_item">
                        <h5>Features</h5>
                        <a href="">Business Marketing</a>
                        <a href="">User Analytic</a>
                        <a href="">Life Chat</a>
                        <a href="">Unlimited Support</a>
                    </div>
                    <div className="Footer_container_links_item">
                        <h5>Resources</h5> 
                        <a href="">IOS and Android</a>
                        <a href="">Watch a demo</a>
                        <a href="">Customers</a>
                        <a href="">API</a>
                    </div>
                </div>
                <div className="Footer_container_links_item">
                    <div className="Footer_container_subscribe">
                        <h5>Get in touch</h5>
                        <div className="Footer_container_subscribe_input">
                            <input type="text" placeholder="Your email"/>
                            <button>Subscribe</button>
                        </div>
                        <p>Lorem impsum dolor amit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Footer
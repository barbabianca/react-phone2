import React from 'react'
import './Navigation.css'
import PersonIcon from '../assets/icons/Person.svg'
import SearchIcon from '../assets/icons/SearchIcon.svg'
import CardIcon from '../assets/icons/CardIcon.svg'
import HeartIcon from '../assets/icons/HeartIcon.svg'


// const PersonIcon = import('../assets/icons/Person.svg');

export default function Navigation() {
  return (
    <nav className='Navigation'>
        <div className='Navigation-container'>
            <div className='Navigation-logo'>
                <a href="">LearnBay Phones</a>
                
            </div>
            <div className='Navigation_links'>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Pages</a>

            </div> 
            <div className='Navigation_options'>
                <div className='Navigation_options_item'>
                    <img src={PersonIcon} alt="" />
                    Login / Register
                </div>
                <div className='Navigation_options_item'>
                    <img src={SearchIcon} alt="" />
                </div>
                <div className='Navigation_options_item'>
                    <img src={CardIcon} alt="" />
                </div>
                <div className='Navigation_options_item'>
                    <img src={HeartIcon} alt="" />
                </div>
            </div>
                
        </div>
    </nav>
  )
}

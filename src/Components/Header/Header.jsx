import React from 'react'
import './Header.css'
import profile_photo from '../../assets/Images/profile_photo.jpg'
const Header = () => {
  return (
    <div className='header'>
      <img src={profile_photo} alt=''/>
      <h1><span>Hello, I'm Macreen Smith,</span> a Software Engineer based in the US.</h1>
      <p>I'm a Front-End Developer in New York, NY with about 3-4 years of experience in the field.</p>
      <div className='header-action'>
        <div className="header-connect">Connect with Me</div>
        <div className="header-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Header

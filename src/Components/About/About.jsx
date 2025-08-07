import React from 'react'
import './About.css'
import profile_photo2 from '../../assets/Images/profile_photo2.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_photo2} alt='' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a Computer Science graduate with a strong passion for web development and a commitment to continuous learning.
              I enjoy building responsive, user-friendly applications using technologies like JavaScript, React, and MongoDB.
              I’ve also had hands-on experience developing interactive projects, including games built with Unity. Detail-oriented and focused under pressure,
              I’m eager to contribute to a collaborative team and grow as a developer while creating meaningful digital experiences.</p>

            <p>In addition to my coding skills, I'm currently learning Cybersecurity, AWS, and AI related functions such as LLM's.
              I also have experience with package handling and freight. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

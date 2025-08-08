import React from 'react'
import './Projects.css'
import city_sights from '../../assets/Images/City-Sights-Photo.jpg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="projects-title">Featured Projects</div>
            <div className="projects-box">
                <div className="project-card">
                    <button className='project-image'>
                        <img src={city_sights} alt='' />
                    </button>
                    <h2 className='project-title'>City Sights</h2>
                    <p className='project-description'>A website where you can read about and plan tourist visits.</p>
                    <div className='tech-used'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>

            </div>

        </div>
    )
}

export default Projects

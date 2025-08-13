import React from 'react'
import './Projects.css'
import city_sights from '../../assets/Images/City-Sights-Photo.jpg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="projects-header">
                <h1>Featured Projects</h1>
            </div>
            <div className="projects-box">
                <div className="project-card">
                <h2 className='project-title'>City Sights</h2>
                    <button className='project-image-button'>
                        <img src={city_sights} alt='' />
                    </button>
                    <p className='project-description'>A website where you can read about and plan tourist visits.</p>
                    <div className='tech-used'>
                        <p>Built With: <span className='html-banner'>HTML</span> <span className='css-banner'>CSS</span> <span className='javascript-banner'>JavaScript</span></p>
                    </div>
                </div>
                <div className="project-card"></div>
                <div className="project-card"></div>

            </div>

        </div>
    )
}

export default Projects

import React from 'react'
import './Projects.css'
import city_sights from '../../assets/Images/City-Sights-Photo.jpg'
import medicare from '../../assets/Images/Medicare.jpg'
import react_news from '../../assets/Images/React-News.jpg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="projects-header">
                <h1>Featured Personal Projects</h1>
            </div>
            <div className="projects-box">
                <div className="project-card">
                    <h2 className='project-title'>City Sights</h2>
                    <a href="https://github.com/MacSmitty8/city-sights" target="_blank" rel="noopener noreferrer">
                        <button className='project-image-button'>
                            <img src={city_sights} alt='' />
                        </button>
                    </a>
                    <p className='project-description'>A website where you can read about and plan tourist visits.</p>
                    <div className='tech-used'>
                        <p>Built With: <span className='html-banner'>HTML</span> <span className='css-banner'>CSS</span> <span className='javascript-banner'>JavaScript</span></p>
                    </div>
                </div>
                <div className="project-card">
                    <h2 className='project-title'>Medicare App</h2>
                    <a href="https://github.com/MacSmitty8/MERN-Medicare-Booking" target="_blank" rel="noopener noreferrer">
                        <button className='project-image-button'>
                            <img src={medicare} alt='' />
                        </button>
                    </a>
                    <p className='project-description'>A Project where you can register as a user and schedule doctors appointments.</p>
                    <div className='tech-used'>
                        <p>Built With: <span className='html-banner'>HTML</span> <span className='css-banner'>TailwindCSS</span> <span className='javascript-banner'>JavaScript</span> <span className='node-banner'>Node.js</span> <span className='mongo-banner'>MongoDB</span></p>
                    </div>
                </div>
                <div className="project-card">
                    <h2 className='project-title'>React News</h2>
                    <a href="https://github.com/MacSmitty8/react-news" target="_blank" rel="noopener noreferrer">
                        <button className='project-image-button'>
                            <img src={react_news} alt='' />
                        </button>
                    </a>
                    <p className='project-description'>A website where you can read news articles using an API.</p>
                    <div className='tech-used'>
                        <p>Built With: <span className='html-banner'>HTML</span> <span className='css-banner'>CSS</span> <span className='javascript-banner'>JavaScript</span> <span className='api-banner'>API</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects

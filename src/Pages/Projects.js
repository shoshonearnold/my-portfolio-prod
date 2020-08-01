import React from 'react'
import '../Styles/PageStyles/Projects.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectItem from '../Components/ProjectItem'
import BacktoTopButton from '../Components/BacktoTopButton'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="project">
                <h1 className="lg-heading">My<span className="text-secondary"> Work</span></h1>
                <h3 className="sm-heading-projects">Check out some of my projects! </h3>
                <ProjectItem />
            </div>
            <BacktoTopButton />
            <Footer />
        </div>
    )
}
  
export default Projects

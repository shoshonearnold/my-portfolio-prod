import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/PageStyles/Home.css'



const Home = props => {
    return (
        <div className="homePage">
            <Navbar />
            <main id="home">
                <div className="RWD-home">
                    <h1 className="lg-heading">Shoshone<span className="text-secondary"> Arnold</span></h1>
                    <h2 className="sm-headinghome">Web Developer, Programmer, & Designer</h2>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/shoshone-arnold/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/shoshonearnold" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://codepen.io/EastCoastShony/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen fa-2x"></i>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Home

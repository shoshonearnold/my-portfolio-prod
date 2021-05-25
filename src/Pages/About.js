import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/PageStyles/About.css'
import Footer from '../Components/Footer'
import BacktoTopButton from '../Components/BacktoTopButton'
import pdf from '../Components/downloads/Shoshone Arnold CV HQ.pdf'



const About = () => {
    return (
        <div className="aboutPage">
            <Navbar />
                <div id="about"> 
                    <h1 className="lg-heading-about">About<span className="text-secondary"> Me</span></h1>
                    <h2 className="sm-heading-about">Let me tell you a few things...</h2>
                    <div className="RWD-wrapper">
                    <div className="about-info">
                        <p id="viewport1">
                            I'm a Software Engineer obessesed with creating quality programs and products.
                            I got my start in development through quality assurance and software testing.
                            I have a deep understanding of
                            <div className="lang-icons">
                                <div><i class="fab fa-html5 fa-2x"></i></div>
                                <div><i class="fab fa-css3 fa-2x"></i></div> 
                                <div><i class="fab fa-js fa-2x"></i></div> 
                                <div><i class="fab fa-react fa-2x"></i></div> 
                                <div><i class="fab fa-vuejs fa-2x"></i></div> 
                                <div><i class="fab fa-java fa-2x"></i></div> 
                                <div><i class="fab fa-python fa-2x"></i></div>
                            </div>  
                        </p>
                    <div className="bio2">    
                        <p id="viewport2">
                            I gained invaluable experience working alongside developers, 
                            learning to think like a software engineer. 
                            Work involved identifying bugs in UI/UX, 
                            interpreting injected dependencies and frameworks, 
                            and most importantly (in my opinion)
                            observing how users interact with applications we developed solutions for.
                        </p>    
                    </div>
                    <div className="bio3">
                        <p id="viewport3">
                            I believe understanding a user's needs and converting them into functional, 
                            reusable code is essential to UX design. 
                            And understanding the components that draws user's attention 
                            to your platform and software is essential to UI design.
                            <br/>
                            <div className="boxesAbout">
                                <div>
                                    <span className="text-secondary"></span> 
                                    <a href="https://compassionate-shirley-5c1ba2.netlify.com" 
                                    target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-eye"></i> View Professional CV</a>
                                </div>
                                <div>
                                    <span className="text-secondary"></span> 
                                    <a href={pdf} download>
                                    <i className="fas fa-download"></i> Download CV</a>
                                </div>
                            </div>
                        </p>
                    </div>
                    </div>
                </div>    
            </div>
            <BacktoTopButton />
            <Footer/>
        </div>
    )
}

export default About

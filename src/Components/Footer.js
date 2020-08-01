import React from 'react'
import '../Styles/ComponentStyles/Footer.css'




const Footer = () => {
    return (
        <div className="footerdiv">
            <footer className="footer">
                <p id="mainfooter">Created with <span role="img" aria-label="keyboard">⌨️</span> by<span id='text'> Shoshone Arnold</span></p>
                <div className="links">
                    <a 
                        href="https://github.com/shoshonearnold" 
                        target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x" id="footeri"></i>
                    </a>
                    <a 
                        href="https://codepen.io/EastCoastShony/" 
                        target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-codepen fa-2x" id="footeri"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/shoshone-arnold/" 
                        target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x" id="footeri"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}


export default Footer

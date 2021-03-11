import React from 'react'
import img from '../Components/img/NumberGuesser.png'
import img1 from '../Components/img/CoffeeFinder.png'
import img2 from '../Components/img/ExpenseTracker.png'
import img3 from '../Components/img/BookMarker.png'
import img4 from '../Components/img/GitHubFinder.png'
import zip from '../Components/downloads/number-genie-master.zip'
import '../Styles/ComponentStyles/ProjectItem.css'

const cardStyle = {
    margin: '6px',
}

const cards = [

        {   
            cardContains: <div className="blockExtends">
                            <p id="holder"><span className="langCSS"><i className="fas fa-circle"></i></span> C# 100.0%</p>
                          </div>,
            cardImage: <img src={img} alt="Project" id="image"/>,
            cardView: <a 
                        href={zip} 
                        className="btn-light-cards"  
                        download><i className="fas fa-eye" style={cardStyle}></i> 
                        Project (.zip)
                    </a>,
            cardGitHub: <a 
                        href="https://github.com/shoshonearnold/number-genie" 
                        className="btn-dark-cards" 
                        target="_blank" rel="noopener noreferrer"><i className="fab fa-github"style={cardStyle}></i> 
                        Github
                    </a>,
        },
        {
            cardContains: <div className="blockExtends">
                            <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span>  63.6%</p>
                            <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  26.5%</p>
                            <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  9.9%</p>
                          </div>,
            cardImage: <img src={img1} alt="Project" id="image"/>,
            cardView: <a 
                        href="https://adoring-shannon-21672c.netlify.com/" 
                        className="btn-light-cards"  
                        download><i className="fas fa-eye" style={cardStyle}></i> 
                        View Live 
                    </a>,
            cardGitHub: <a 
                        href="https://github.com/shoshonearnold/reactcoffeefinder" 
                        className="btn-dark-cards" 
                        target="_blank" rel="noopener noreferrer"><i className="fab fa-github"style={cardStyle}></i> 
                        Github
                    </a>,
        },
        {
            cardContains: <div className="blockExtends">
                            <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span>  64.5%</p>
                            <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  27.8%</p>
                            <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  7.7%</p>
                          </div>,
            cardImage:<img src={img2} alt="Project" id="image"/>,
            cardView: <a 
                        href="https://vigorous-mcnulty-9df34f.netlify.app/" 
                        className="btn-light-cards"  
                        download><i className="fas fa-eye" style={cardStyle}></i> 
                        View Live 
                    </a>,
            cardGitHub: <a 
                        href="https://github.com/shoshonearnold/expense_tracker" 
                        className="btn-dark-cards" 
                        target="_blank" rel="noopener noreferrer"><i className="fab fa-github"style={cardStyle}></i> 
                        Github
                    </a>,
        },
        {
            cardContains: <div className="blockExtends">
                            <p id="holder"><span className="langCSS4"><i className="fab fa-js"></i></span>  44.4%</p>
                            <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  19.7%</p>
                            <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  35.9%</p>
                          </div>,
            cardImage: <img src={img3} alt="Project" id="image"/>,
            cardView: <a 
                        href="https://pensive-yalow-36e195.netlify.app/" 
                        className="btn-light-cards"  
                        download><i className="fas fa-eye" style={cardStyle}></i> 
                        View Live 
                    </a>,
            cardGitHub: <a 
                        href="https://github.com/shoshonearnold/shoshone-s-Bookmarker" 
                        className="btn-dark-cards" 
                        target="_blank" rel="noopener noreferrer"><i className="fab fa-github"style={cardStyle}></i> 
                        Github
                    </a>,
        },
        {
            cardContains: <div className="blockExtends">
                            <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span> 47.2%</p>
                            <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  48.7%</p>
                            <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  4.1%</p>
                          </div>,
            cardImage: <img src={img4} alt="Project" id="image"/>,
            cardView: <a 
                        href="https://silly-heisenberg-d7dd87.netlify.app/" 
                        className="btn-light-cards"  
                        download><i className="fas fa-eye" style={cardStyle}></i> 
                        View Live 
                    </a>,
            cardGitHub: <a 
                        href="https://github.com/shoshonearnold/github-finder" 
                        className="btn-dark-cards" 
                        target="_blank" rel="noopener noreferrer"><i className="fab fa-github"style={cardStyle}></i> 
                        Github
                    </a>,
        }
]

export default cards
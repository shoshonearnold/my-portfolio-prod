import React from 'react'
import '../Styles/ComponentStyles/Webiframe.css'


const iframeStyle = {
    width: '90%',
    height: '800px',
    marginTop: '2em',
};

/*const boxStyle = {
    position: 'absolute',
    width: '70%',
    height: '40px',
    background: 'black'
};*/

const Webiframe = () => {
    return (
        <div className="iframeContainer">
            <div className="iframe-stuff">
                <iframe src="https://affectionate-heyrovsky-98bde6.netlify.app/" title="#" style={iframeStyle}></iframe>
                <iframe src="https://jolly-beaver-803a22.netlify.app/" title="#" style={iframeStyle}></iframe>
                <iframe src="https://sharp-nobel-410eed.netlify.app/" title="#" style={iframeStyle}></iframe>
                <iframe src="https://silly-heisenberg-d7dd87.netlify.app/" title="#" style={iframeStyle}></iframe>
                <iframe src="https://pensive-yalow-36e195.netlify.app/" title="#" style={iframeStyle}></iframe>
                <iframe src="https://sleepy-archimedes-6be822.netlify.app/" title="#" style={iframeStyle}></iframe>
            </div>
        </div>
        /*<div className="blockExtends">  use this stuff later!
            <p id="holder"><span className="langCSS"><i className="fas fa-circle"></i></span> C# 100.0%</p>
        </div>
        
        <div className="blockExtends">
            <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span>  63.6%</p>
            <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  26.5%</p>
            <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  9.9%</p>
        </div>        
        */
    )
}

export default Webiframe

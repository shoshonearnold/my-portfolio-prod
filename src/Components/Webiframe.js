import React from 'react'
import '../Styles/ComponentStyles/Webiframe.css'


const Webiframe = () => {
    return (
        <div className="iframe-stuff">
            <iframe src="https://sharp-nobel-410eed.netlify.app/" title="#" width="90%" height="800" style={{marginTop: 2 + 'em'}}></iframe>
            <iframe src="https://silly-heisenberg-d7dd87.netlify.app/" title="#" width="90%" height="800" style={{marginTop: 2 + 'em'}}></iframe>
            <iframe src="https://pensive-yalow-36e195.netlify.app/" title="#" width="90%" height="800" style={{marginTop: 2 + 'em'}}></iframe>
            <iframe src="https://sleepy-archimedes-6be822.netlify.app/" title="#" width="90%" height="800" style={{marginTop: 2 + 'em'}}></iframe>
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

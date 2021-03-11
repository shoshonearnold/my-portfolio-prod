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
    )
}

export default Webiframe

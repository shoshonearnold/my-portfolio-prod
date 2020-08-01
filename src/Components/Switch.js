import React from 'react'
import '../Styles/ComponentStyles/Switch.css'

const Switch = () => {
    return (
        <div className="switchtoggle">
            <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
        </div>
    )
}

export default Switch

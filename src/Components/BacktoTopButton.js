import React from 'react'
import '../Styles/ComponentStyles/BackToTopButton.css'

const scroller = () => {
    window.scrollTo(0, 0)
}

const svgStyle = {
    fontsize: '400px'
}

const BacktoTopButton = () => {
    return (
        <div className="top-btn">
            <button className="btn-style" onClick={scroller}>
            <i className="fas fa-arrow-up" id="arrw"></i>
            </button>
        </div>
    )
}

export default BacktoTopButton

import React from 'react'
import cards from './Cards'
import CodeBlocks from './CodeBlocks'
import '../Styles/ComponentStyles/ProjectItem.css'


const ProjectItem = () => {

    return (
        <div className="test">
            {cards.map(card => {
                return <div className="container">
                        <div className="wrapper">
                            {card.cardContains}
                            {card.cardImage}
                            {card.cardView}
                            {card.cardGitHub}
                            {card.cardCode}
                        </div>
                    </div>
            })}
        </div>
    )
}

export default ProjectItem

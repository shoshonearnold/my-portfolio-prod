import React, { Component } from 'react'
import '../Styles/ComponentStyles/Navbar.css'
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    state = {
        active: true,
    };

    toggleClassHandler = () => {
        const currentButton = this.state.active
        this.setState({ active: !currentButton})
    }

    navItemHandler = () => {
        
    }

    render() {
        return (
            <div>
                {/*<Switch /> COMING IN A FUTURE UPDATE!!!*/}
                    <div onClick={this.toggleClassHandler} className={this.state.active ? "menu-btn" : "menu-btn close"}>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                    </div>
                <div>
                    <nav className={this.state.active ? "menu" : "menu show"}>
                        <div className={this.state.active ? "menu-branding" : "menu-branding show"}>
                            <div className="portrait"></div>
                        </div>
                        <ul className={this.state.active ? "menu-nav" : "menu-nav show"}>{[
                            <NavLink to="/"><button className="nav-link">Home</button></NavLink>,
                            <NavLink to="/about"><button className="nav-link">About Me</button></NavLink>,
                            <NavLink to="/projects"><button className="nav-link">My Work</button></NavLink>,
                            <NavLink to="/contact"><button className="nav-link">How To Reach Me</button></NavLink>
                        ].map((links, idx) => {
                            return <li key={idx} className={this.state.active ? "nav-item" : "nav-item show"}>{links}</li>
                        })}
                    </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar


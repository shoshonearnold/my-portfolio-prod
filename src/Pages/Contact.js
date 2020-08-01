import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/PageStyles/Contact.css'
import BacktoTopButton from '../Components/BacktoTopButton'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <main id="contact">
                <h1 className="lg-heading">Contact<span className="text-secondary"> Me</span></h1>
                <h2 className="sm-heading-contact">This is how you can reach me...</h2>
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email: </span> <a href="mailto:eastcoastshony@gmail.com">eastcoastshony@gmail.com</a>
                    </div>
                <div className="boxes">    
                    <span className="text-secondary">Phone: </span> (984) 218-9006
                </div>
                <div className="boxes">
                    <span className="text-secondary">Address: </span><a href="/" target="_blank">8000 Ovation Drive, Cary NC 27513</a>
                </div>
                </div>
            </main>
            <BacktoTopButton />
            <Footer />
        </div>
    )
}

export default Contact

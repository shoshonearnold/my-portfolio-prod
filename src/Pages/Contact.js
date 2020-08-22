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
                <h1 className="lg-heading-contact">Contact<span className="text-secondary"> Me</span></h1>
                <h2 className="sm-heading-contact">This is how you can reach me...</h2>
                <div className="boxes">
                    <div className="boxes">
                        <span className="text-secondary">Email: </span> <a href="mailto:eastcoastshony@gmail.com">eastcoastshony@gmail.com</a>
                    </div>
                <div className="boxes">    
                    <span className="text-secondary">Phone: </span> (984) 218-9006
                </div>
                <div className="boxes">
                    <span className="text-secondary">Please feel free to reach out on any linked social media! </span>
                </div>
                </div>
            </main>
            <BacktoTopButton />
            <Footer />
        </div>
    )
}

export default Contact

import React from 'react'
import { BrowserRouuter as Router, Route, Link } from 'react-router-dom'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import { Wrapper } from '../styles/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Kodflix = () => {
    return (
        <Wrapper>
            <Header />
            <Router> 
                <Gallery />
                <AboutUs />
            </Router>
            <Footer />
        </Wrapper>
    ); 
}

export default Kodflix

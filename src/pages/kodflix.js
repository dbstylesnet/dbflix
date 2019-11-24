import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import Details from '../components/Details'
import { Wrapper } from '../styles/styles'
// import Header from '../components/Header'
import HeaderClass from '../components/HeaderClass'
// import HeaderHooks from '../components/HeaderHooks'
import Footer from '../components/Footer'

const Kodflix = () => {
    return (
        <Wrapper>
            <Router>
                {/* <Header msg={'Hello'} /> */}
                <HeaderClass msg={'Hello'} />
                {/* <HeaderHooks msg={'Hello'} /> */}
                <Route exact component={Gallery} path='/' />
                <Route component={AboutUs} path='/about' />
                <Route component={Details} path='/:d' />
                <Footer />
            </Router>
        </Wrapper>
    ); 
}

export default Kodflix

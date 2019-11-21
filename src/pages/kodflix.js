import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import Details from '../components/Details'
import { Wrapper } from '../styles/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const Kodflix = () => {
    return (
        <Wrapper>
            <Router> 
                <Header msg={'Hello'} />
                <Route exact component={Gallery} path='/' />
                <Route component={AboutUs} path='/about' />
                <Route component={Details} path='/:d' />
                <Counter msg={'Hello'} />
                <Footer />
            </Router>
        </Wrapper>
    ); 
}

export default Kodflix

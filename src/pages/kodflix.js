import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import Details from '../components/Details'
// import DetailsClass from '../components/DetailsClass'
import { Wrapper } from '../styles/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFound from '../components/NotFound'

const Kodflix = () => {
    return (
        <Wrapper>
            <Router>
                {/* <Switch> */}
                <Header />
                <Route exact component={Gallery} path='/' />
                <Route component={AboutUs} path='/about' />
                <Route component={Details} path='/:movieId' />
                {/* <Route render={ () => <h1>404 Error</h1> }/> */}
                <Footer />
                {/* </Switch> */}
            </Router>
        </Wrapper>
    ); 
}

export default Kodflix

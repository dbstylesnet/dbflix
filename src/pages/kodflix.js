import React from 'react'
import Gallery from '../components/Gallery'
import { Wrapper } from '../styles/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Kodflix = () => {
    return (
        <Wrapper>
            <Header />
            <Gallery />
            <Footer />
        </Wrapper>
    ); 
}

export default Kodflix

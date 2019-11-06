import React from 'react'
import MainContent from './components/MainContent'
import { Wrapper } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'

const Kodflix = () => {
    return (
        <Wrapper>
            <Header />
            <MainContent />
            <Footer />
        </Wrapper>
    ); 
}

export default Kodflix

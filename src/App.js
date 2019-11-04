import React from 'react'
import MainContent from './components/MainContent'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
        </div>
    ); 
}

export default App

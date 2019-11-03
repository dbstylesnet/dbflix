import React from 'react'
import MainContent from './components/MainContent'
import './App.css'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    kodflix Project
                </p>
            </header>
            <MainContent />
            <Footer />
        </div>
    );
}

export default App

import React from 'react';
import MainContent from './components/MainContent';
import './App.css';
import ender from './images/ender.jpeg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Kodeflix Project
                </p>
            </header>
            <img src={ender} alt='Movie' className='full-movie' />
            <br />
            <MainContent />
        </div>
    );
}

export default App;

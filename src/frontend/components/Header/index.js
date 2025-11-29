import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import dbflixLogo from '../../images/dbflixLogo.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function foldSwitch() { 
        setIsOpen(!isOpen)
    };

    return (
        <Wrapper>
            <div className="logo">  
                <Link to='/'>
                    <img src={dbflixLogo} alt={dbflixLogo} />
                    <p>movie library</p>
                </Link>
                <span>
                    <div className={`menu ${isOpen ? 'opened' : ''}`}>
                        <div className='menuTrigger' onClick={foldSwitch}>
                            <div><span></span></div>
                        </div>
                        <Link to='/about'>about us</Link>
                    </div>
                </span>
            </div>
        </Wrapper>
    )
}

export default Header

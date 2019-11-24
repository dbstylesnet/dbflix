import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import dbflixLogo from '../../images/dbflixLogo.svg'

function HeaderHooks({ msg }) {
    const [isOpen, setIsOpen] = useState(false)
    const [folded, setIsFolded] = useState('folded')

    function foldSwitch() { 
        setIsOpen(!isOpen)
        setIsFolded(isOpen ? 'folded' : 'unfolded')
    };

    return (
        <Wrapper className="App-header">
            <div className="logo">
                <Link to='/'>
                    <img src={dbflixLogo} alt={dbflixLogo} />
                    <p>handy movie library</p>
                </Link>
                <span>
                    <div className={`menu ${isOpen ? 'opened' : ''}`}>
                        <div className='menuTrigger' onClick={foldSwitch}>
                            <div><span></span></div>
                        </div>{msg}{folded}
                        <Link to='/about'>about us</Link>
                    </div>
                </span>
            </div>
        </Wrapper>
    )
}

export default HeaderHooks

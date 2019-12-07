import React from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import dbflixLogo from '../../images/dbflixLogo.svg'

const HeaderStateless = () => {
    return(
        <Wrapper>
            <div className="logo">
                <Link to='/'>
                    <img src={dbflixLogo} alt={dbflixLogo} />
                    <p>handy movie library</p>
                </Link>
                <span>
                    <Link to='/about'>about us</Link>
                </span>
            </div>
        </Wrapper>
    )
}

export default HeaderStateless

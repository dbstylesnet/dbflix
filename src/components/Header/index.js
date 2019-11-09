import React from 'react'
import { Wrapper } from './styles'
import dbflixLogo from '../../images/dbflixLogo.svg'

const Header = () => {
  return(
    <Wrapper className="App-header">
      <div>
          <img src={dbflixLogo} alt={dbflixLogo} />
          <p>handy movie liberary</p>
        </div>
    </Wrapper>
   )
}

export default Header

import React from 'react'
import { BrowserRouuter as Router, Route, Link } from 'react-router-dom'
import { Wrapper } from './styles'
import Movie from '../../components/Movie'

import avengers from '../../images/avengers.jpeg'
import avatar from '../../images/avatar.jpg'
import band from '../../images/band.jpeg'
import ender from '../../images/ender.jpeg'
import warcraft from '../../images/warcraft.jpg'
import xmen from '../../images/xmen.jpg'

const MainContent = () => {
    return(
        <>
            <Wrapper>
                <Movie imageSrc={avengers}  title='Avengers'/>
                <Movie imageSrc={avatar} title='Avatar' />
                <Movie imageSrc={band} title='Band Of Brothers' />
                <Movie imageSrc={warcraft} title='Warcraft' />
                <Movie imageSrc={xmen} title='X-men' />
                <Movie imageSrc={ender} title={`Ender's game`} />
            </Wrapper>
            {/* <Wrapper>

            </Wrapper> */}
        </>
    )
}

export default MainContent

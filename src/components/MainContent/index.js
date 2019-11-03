import React from 'react'
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
        <section>
            <Wrapper>
                <Movie imageSrc={avengers} />
                <Movie imageSrc={avatar} />
                <Movie imageSrc={band} />
            </Wrapper>
            <Wrapper>
                <Movie imageSrc={warcraft} />
                <Movie imageSrc={xmen} />
                <Movie imageSrc={ender} />
            </Wrapper>
        </section>
    )
}

export default MainContent

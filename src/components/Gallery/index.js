import React from 'react'
import { Wrapper } from './styles'
import Movie from '../../components/Movie'

import gallery from '../../config/index'
import avengers from '../../images/avengers.jpeg'
import avatar from '../../images/avatar.jpg'
import band from '../../images/band.jpeg'
import ender from '../../images/ender.jpeg'
import warcraft from '../../images/warcraft.jpg'
import xmen from '../../images/xmen.jpg'

const Gallery = () => {
    return(
        <>{gallery.movies.avatar.src}
            <Wrapper>
                <Movie imageSrc={avengers} id='avengers' title='Avengers'/>
                <Movie imageSrc={avatar} id='avatar' title='Avatar' />
                <Movie imageSrc={band} id='band' title='Band Of Brothers' />
                <Movie imageSrc={warcraft} id='warcraft' title='Warcraft' />
                <Movie imageSrc={xmen} id='xmen' title='X-Men' />
                <Movie imageSrc={ender} id='ender' title={`Ender's Game`} />
            </Wrapper>
        </>
    )
}

export default Gallery

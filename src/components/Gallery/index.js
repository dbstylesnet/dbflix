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
                <Movie imageSrc={avengers}  title='Avengers'/>
                <Movie imageSrc={avatar} title='Avatar' />
                <Movie imageSrc={band} title='Band Of Brothers' />
                <Movie imageSrc={warcraft} title='Warcraft' />
                <Movie imageSrc={xmen} title='X-Men' />
                <Movie imageSrc={ender} title={`Ender's Game`} />
            </Wrapper>
        </>
    )
}

export default Gallery

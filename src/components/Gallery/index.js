import React from 'react'
import { Wrapper } from './styles'
import Movie from '../../components/Movie'
import GalleryData from '../../config/index'

const Gallery = () => {
    return(
        <>
            <Wrapper>
                {GalleryData().map(cover => {
                    return (
                        <Movie 
                            key={cover.id} 
                            imageSrc={cover.imageSrc} 
                            id={cover.id} 
                            title={cover.title} />
                    );
                })}
            </Wrapper>
        </>
    )
}

export default Gallery

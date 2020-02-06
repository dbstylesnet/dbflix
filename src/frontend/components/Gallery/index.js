import React , { useState } from 'react'
import { Wrapper } from './styles'
import HeroBG from '../../components/HeroBG'
import Movie from '../../components/Movie'
import GalleryData from '../../config/index'

const av = ['../../images/avatar.jpg']
const band = ['../../images/band.jpg']


const Gallery = () => {
    const [bgLink, setBgLink] = useState(av)
    const [opaImg, setOpaImg] = useState(0)

    const movieIn = (bg) => {
        setOpaImg(.3)
        setBgLink(bg)
    }
    const movieOut = () => {
        setOpaImg(0)
    }
    
    return(
        <>
            <HeroBG opaImg={opaImg} imgSrc={bgLink} altText='Hero background' />
            <Wrapper>
                {GalleryData().map(cover => {
                    return (
                        <Movie 
                            key={cover.id} 
                            imageSrc={cover.imageSrc} 
                            id={cover.id} 
                            title={cover.title} 
                            movieIn={movieIn}
                            movieOut={movieOut}
                            />
                    );
                })}
            </Wrapper>
        </>
    )
}

export default Gallery

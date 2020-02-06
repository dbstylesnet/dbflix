import React , { useState } from 'react'
import { Wrapper } from './styles'
import HeroBG from '../../components/HeroBG'
import Movie from '../../components/Movie'
import GalleryData from '../../config/index'
import APICalls from '../../components/APICalls'

const av = ['../../images/avatar.jpg']

const Gallery = () => {
    const [bgLink, setBgLink] = useState(av)
    const [opaImg, setOpaImg] = useState(0)

    const movieIn = (bgImage) => {
        if (bgImage === false) { 
            setOpaImg(0) 
        } else {
            setBgLink(bgImage)
            setOpaImg(.3)
        }
    }
    
    return(
        <>
            <HeroBG 
                opaImg={opaImg} 
                imgSrc={bgLink} 
                altText='Hero background' 
                />
            <Wrapper>
                {GalleryData().map(cover => {
                    return (
                        <Movie 
                            key={cover.id} 
                            imageSrc={cover.imageSrc} 
                            id={cover.id} 
                            title={cover.title} 
                            movieIn={movieIn}
                            />
                    );
                })}
            </Wrapper>
        </>
    )
}

export default Gallery

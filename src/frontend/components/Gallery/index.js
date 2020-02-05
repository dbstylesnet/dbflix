import React , { useState } from 'react'
import { Wrapper } from './styles'
import HeroBG from '../../components/HeroBG'
import Movie from '../../components/Movie'
import GalleryData from '../../config/index'

const av = ['../../images/avatar.jpg']
const band = ['../../images/band.jpg']


const Gallery = () => {
    const [bgLink, setBgLink] = useState(band)
    const changeBackground = () => {
        setBgLink(av)
      }
    // setBgLink = () => {

    // } 

    return(
        <>
            <HeroBG imgSrc={bgLink} altText='Hero background' />
            <Wrapper>
                {GalleryData().map(cover => {
                    return (
                        <Movie 
                            key={cover.id} 
                            imageSrc={cover.imageSrc} 
                            id={cover.id} 
                            title={cover.title} 
                            setBg={changeBackground}
                            />
                    );
                })}
            </Wrapper>
        </>
    )
}

export default Gallery

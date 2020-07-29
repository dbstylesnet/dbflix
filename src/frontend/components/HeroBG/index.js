import React from 'react'
import { Wrapper } from './styles'

const HeroBG = ({opaImg, imgSrc, altText}) => {
    return (
        <Wrapper opaImg={opaImg}>
             <img src={imgSrc} alt={altText} />
        </Wrapper>
    )
}

export default HeroBG


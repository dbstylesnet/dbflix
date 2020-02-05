import React from 'react'
import { Wrapper } from './styles'

const HeroBG = props => {
    return (
        <Wrapper>
             <img src={props.imgSrc} alt={props.altText} />
        </Wrapper>
    );
}

export default HeroBG

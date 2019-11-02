import React from 'react'
import { Figure } from './styles'

/**
* @author
* @function Movie
**/

const Movie = ({ ...props }) => {
    return (
        <Figure>
            <img src={props.imageSrc} alt='JSlogo' />
        </Figure>
    )
}

export default Movie

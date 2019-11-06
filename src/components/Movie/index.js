import React from 'react'
import { Figure } from './styles'

const Movie = ({ ...props }) => {
    return (
        <Figure>
            <label for="toggle-box" class="boxy">{props.title}</label>
            <img src={props.imageSrc} alt={props.title} />
        </Figure>
    )
}

export default Movie

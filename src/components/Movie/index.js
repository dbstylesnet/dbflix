import React from 'react'
import { Figure } from './styles'

/**
* @author
* @function Movie
**/

const Movie = ({ ...props }) => {
    return (
        <Figure>
            {/* <input type="checkbox" class="toggle-box" id="toggle-box1"> */}
            <label for="toggle-box" class="boxy">{props.title}</label>
            <img src={props.imageSrc} alt={props.title} />
        </Figure>
    )
}

export default Movie

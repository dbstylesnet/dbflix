import React, { useState } from 'react'
import { Figure } from './styles'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    return (
        <Figure>
            <Link to={`/${props.id}`}>
                <div onMouseOver={() => props.tadam(props.imageSrc)}
                    onMouseLeave={() => props.tadam(false, 0)}
                >
                    <label>{props.title}</label>
                    <img src={props.imageSrc} alt={props.title} />
                </div>
            </Link>
        </Figure>
    )
}

export default Movie

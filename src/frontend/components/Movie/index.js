import React, { useState } from 'react'
import { Figure } from './styles'
import { Link } from 'react-router-dom'

const Movie = ({ ...props }) => {
    return (
        <Figure>
            <Link to={`/${props.id}`}>
                <div onMouseOver={props.setBg}>
                    <label>{props.title}</label>
                    <img src={props.imageSrc} alt={props.title} />
                </div>
            </Link>
        </Figure>
    )
}

export default Movie

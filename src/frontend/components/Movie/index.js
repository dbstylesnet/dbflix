import React from 'react'
import { Figure } from './styles'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    return (
        <Figure>
            <Link to={`/${props.id}`}>
                <div 
                    onMouseOver={() => props.movieIn(`../../images/${props.id}.jpg`)}
                    onMouseLeave={() => props.movieIn(false)}
                    >
                    <label>{props.title}</label>
                    <img src={require(`../../images/${props.id}.jpg`)} alt={props.title} />
                </div>
            </Link>
        </Figure>
    )
}

export default Movie

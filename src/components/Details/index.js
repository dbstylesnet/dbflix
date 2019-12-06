import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import { useParams } from 'react-router-dom'
import GalleryData from '../../config/index'

const Details = (props) => {

    const [movie, setMovie] = useState({})
    const { movieId } = useParams()
    // const movieId = props.match.params.movieId

    useEffect(() => {
        let movie = GalleryData().find((movie) => movie.id === movieId)
        setMovie(movie);
        }, []
    );

    return (
        <Wrapper>
           {movie.id ? <div>
                Details of the movie:<br /><br />
                {movie.title}<br /><br />
                {movie.description}<br /><br />
                <img src={movie.imageSrc} alt={movie.title} />
                <br /><br />
            </div> : <div></div>}
        </Wrapper>
    )
}

export default Details

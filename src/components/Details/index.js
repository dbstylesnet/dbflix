import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import { useParams } from 'react-router-dom'
import GalleryData from '../../config/index'

const Details = () => {

    const [movie, setMovie] = useState({})
    const { movieId } = useParams()


    useEffect(() => {
        let movie = GalleryData().find((movie) => movie.id === movieId)
        setMovie(movie);
        }, []
    );

    return (
        <Wrapper>
           {movie.id ? <div>
                Details of the movie:<br /><br />
                {movie.id}
                <br /><br />
            </div> : <div></div>}
        </Wrapper>
    )
}

export default Details

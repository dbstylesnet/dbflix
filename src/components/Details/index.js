import React from 'react'
import { Wrapper } from './styles'
import GalleryData from '../../config/index'

const Details = (props) => {

    let movieId = props.match.params.movieId
    let movie = GalleryData().find((movie) => movie.id === movieId) 
 
    return (
        <Wrapper>
            <div>
                Details of the movie:<br /><br />
                {movie.id}<br /><br />
            </div> 
        </Wrapper>
    )
}

export default Details

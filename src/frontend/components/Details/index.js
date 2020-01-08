import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import { useParams, Redirect } from 'react-router-dom'
// import GalleryData from '../../config/index'
import APICalls from '../APICalls'


const Details = () => {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams() 

    useEffect(() => {
        APICalls().then(dataAll => dataAll.data).then(data => data.find(movie => {
            console.log(movie)
            return movie.id === movieId}
            )).then(data => setMovie(data))
        }, []
    )

    return (
        <Wrapper className='wrapper'>
           {movie ? <div>
                Details of the movie {movie.title}<br /><br />
                <div className='detailsContainer'> 
                    <div>{movie.description}<br /><br /></div>
                    {/* <div><img src={require(`/src/images/${movieId}.jpg`)} alt={movie.title} /></div> */}
                </div>
                <br /><br />
            </div> : movie === undefined ? <Redirect to='/not-found' /> : <div>nie</div> }
        </Wrapper>
    )
}

export default Details

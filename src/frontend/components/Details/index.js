import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import { useParams, Redirect } from 'react-router-dom'
import APICalls from '../APICalls'


const Details = () => {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams() 

    useEffect(() => {
        APICalls()
            .then(dataAll => dataAll.data)
            .then(data => data.find(movie => movie.id === movieId))
            .then(data => setMovie(data))
        }, []
    )

    return (
        <Wrapper className='wrapper'>
           {movie ? <div>
                <br /><br />
                    <h3>{movie.title}</h3>
                <br /><br />
                <div className='detailsContainer'> 
                    <div>{movie.description}<br /><br /></div>
                    <div><img src={require(`../../images/${movieId}.jpg`)} alt={movie.title} /></div>
                </div>
                <br /><br />
            </div> : movie === undefined ? <Redirect to='/not-found' /> : '' }
        </Wrapper>
    )
}

export default Details

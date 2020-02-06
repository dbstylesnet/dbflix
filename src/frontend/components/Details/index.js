import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import { useParams, Redirect } from 'react-router-dom'
import Loading from '../Loading'
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
           {movie ? <Loading /> : movie === undefined ? <Redirect to='/not-found' /> : <Loading /> }
        </Wrapper>
    )
}

export default Details

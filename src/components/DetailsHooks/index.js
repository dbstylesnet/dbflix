import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import Counter from '../Counter'
import GalleryData from '../../config/index'

const DetailsHooks = (props) => {

    const [movie, setMovie] = useState()
    const [points, setPoints] = useState()

    // constructor() {
    //     super();
    //     this.state = {
    //         welcomeMessage: 'Hello, this will be the details page for each Movie & TV show :)',
    //         points: 0,
    //         movie: {}
    //     }
    

    useEffect((props) => {
        let movieId = props.match.params.movieId
        let movie = GalleryData().find((movie) => movie.id === movieId) 
        setMovie({
            movie,
            points: points + 1000,
        })
    })

    function runOnClick() {
        this.setPoints({
            welcomeMessage: 'Pressed Up',
            points: points + 1,
        })
    } 

    function runLowClick() {
        this.setPoints({
            welcomeMessage: 'Pressed Down',
            points: points - 1,
        })
    } 

    return (
        <Wrapper>
            <div>
                Details of the movaie:<br />
                {movie.id}<br />
                <div> here goes points {points} </div>
                <button onClick={() => this.runOnClick()}>Button here</button><br />
                <button onClick={() => this.runLowClick()}>Button low </button><br />
                Description goes here. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <Counter msg={'Hello'} />
            </div> 
        </Wrapper>
    )
}

export default DetailsHooks

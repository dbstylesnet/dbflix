import React , { useState, useEffect } from 'react'
import { Wrapper } from './styles'
import HeroBG from '../../components/HeroBG'
import Movie from '../../components/Movie'
import APICalls from '../../components/APICalls'
import Loading from '../../components/Loading'

const Gallery = () => {
    const [bgLink, setBgLink] = useState(`../../images/avengers.jpg`)
    const [opaImg, setOpaImg] = useState(0)
    const [allMovies, setAllMovies] = useState([])

    const movieIn = (bgImage) => {
        if (bgImage === false) { 
            setOpaImg(0) 
        } else {
            setBgLink(bgImage)
            setOpaImg(.3)
        }
    }

    useEffect(() => {
        APICalls()
            .then(dataAll => dataAll.data)
            .then(data => setAllMovies(data))
        }, []
    )

    return(
        <>
            {/* <Loading /> */}
            <HeroBG 
                opaImg={opaImg} 
                imgSrc={bgLink} 
                altText='Hero background' 
                />
            <Wrapper>
                {allMovies.map(movie => {
                    return (
                        <Movie
                            key={movie.id}
                            id={movie.id} 
                            title={movie.title}
                            movieIn={movieIn}
                            />
                    )
                })}
            </Wrapper>
        </>
    )
}

export default Gallery

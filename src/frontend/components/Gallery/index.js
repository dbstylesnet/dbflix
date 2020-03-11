import React , { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Wrapper } from './styles'
import HeroBG from '../../components/HeroBG'
import Movie from '../../components/Movie'
import APICalls from '../../components/APICalls'
import Loading from '../../components/Loading'

const Gallery = () => {
    const [bgLink, setBgLink] = useState(`../../images/avengers.jpg`)
    const [opaImg, setOpaImg] = useState(0)
    const [allMovies, setAllMovies] = useState({loading: <Loading />})

    const movieIn = (bgImage) => {
        if (bgImage === false) { 
            setOpaImg(0) 
        } else {
            setBgLink(bgImage)
            setOpaImg(.3)
        }
    }

    useEffect(() => {
        // setTimeout(() => {
            // APICalls()
            //     .then(dataAll => dataAll.data)
            //     .then(data => setAllMovies(data))
            // }, 1000)

            fetch('/rest/movies')
                // .then(data => console.log(data))
                .then(data => data.json())
                // .then(data => console.log(data))
                .then(data => {
                    // console.log(data)
                    return setAllMovies(data)
                })
            }
        //     , 1000)

        // }, []
    )

    return(
        <>
            {/* <Loading /> */}
            {allMovies 
                ? allMovies.loading 
                    ? allMovies.loading
                    : <>
                        <HeroBG 
                            opaImg={opaImg} 
                            imgSrc={bgLink} 
                            altText='Hero background' 
                            />
                        <Wrapper>
                            {Object.values(allMovies).map(movie => {
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
                : <Redirect to='/not-found' />
            }
        </>
    )
}

export default Gallery

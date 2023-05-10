import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMovies } from './movieSlice'

const Movie2 = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector((state)=> state.movie)
    console.log(movies)
    
    useEffect(() => {
        dispatch(getMovies())
    }, [])

  return (
    <>{
        movies?.map((eachMovie)=>
        <>
        <div key={eachMovie.id} className="col-sm-6 col-lg-4">
            <div className="movie-grid">
                <div className="movie-thumb c-thumb">
                        <Link to="#0">
                            <img
                            src={eachMovie.movieUrl}
                            alt="movie"
                            />
                        </Link>
                    </div>
                    <div className="movie-content bg-one">
                        <h5 className="title m-0">
                            <Link to="#0">{eachMovie.name}</Link>
                        </h5>
                        <ul className="movie-rating-percent">
                            <li>
                                <div className="thumb">
                                    <img
                                    src="assets/images/movie/tomato.png"
                                    alt="movie"
                                    />
                                </div>
                                <span className="content">88%</span>
                            </li>
                            <li>
                                <div className="thumb">
                                    <img
                                    src="assets/images/movie/cake.png"
                                    alt="movie"
                                    />
                                </div>
                                <span className="content">88%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        )
    }
        
        {/* <div className="col-sm-6 col-lg-4">
            <div className="movie-grid">
                <div className="movie-thumb c-thumb">
                <Link to="#0">
                    <img
                    src="assets/images/movie/movie03.jpg"
                    alt="movie"
                    />
                </Link>
                </div>
                <div className="movie-content bg-one">
                    <h5 className="title m-0">
                        <Link to="#0">venus</Link>
                    </h5>
                    <ul className="movie-rating-percent">
                        <li>
                            <div className="thumb">
                                <img
                                src="assets/images/movie/tomato.png"
                                alt="movie"
                                />
                            </div>
                            <span className="content">88%</span>
                        </li>
                        <li>
                            <div className="thumb">
                                <img
                                src="assets/images/movie/cake.png"
                                alt="movie"
                                />
                            </div>
                            <span className="content">88%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Movie2
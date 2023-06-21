import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import movie from '../../repositories/movie';
import "../trending movie info/TrendingMovieInfo.css";
import { imgBaseUrl } from '../../repositories/repository';


export default function MoviesDetails() {

    const {id}=useParams();
    const [moviesdetails, setMoviesDetails]=useState([]);

     async function getMoviesByName(id){
        const CurrrentDetails = await movie.getMoviesByName(id);
        setMoviesDetails(CurrrentDetails)
     }
     useEffect(()=>{
        getMoviesByName(id)
     },[id])
    return (
        <div>
          {moviesdetails && (
            <div>
              <img
                className="backdrop_path-img"
                src={imgBaseUrl + moviesdetails.backdrop_path}
                alt={moviesdetails.title}
              />
              <div className="backdrop_path-curtain">
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="MovieInfo-poster_path"
                        src={imgBaseUrl + moviesdetails.poster_path}
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h1 className="MovieInfo-title">
                        {moviesdetails.title}{" "}
                        <span>{`(${moviesdetails.release_date})`}</span>
                      </h1>
                      <h4 className="MovieInfo-tagline">
                        <b>{moviesdetails.tagline}</b>
                      </h4>
                      <b className="MovieInfo-overview">Overview</b>
                      <p className="MovieInfo-desc">{moviesdetails.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

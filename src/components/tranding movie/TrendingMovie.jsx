import React, { useEffect, useState } from "react";
import trending from "../../repositories/trending";
import { imgBaseUrl } from "../../repositories/repository";
import "./TrendingMovie.css";
import { Link } from "react-router-dom";

export default function TrendingMovie() {
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  async function getTrendingMovie() {
    const currentTrendingMovie = await trending.getTrendingMovie();
    setTrendingMovieList(currentTrendingMovie);
  }
  useEffect(() => {
    getTrendingMovie();
  }, []);

  return (
    <div className="my-4">
      <div className="trending-movie-bgimg">
        <div className="trending-movie-flexing">
          {trendingMovieList &&
            trendingMovieList.map((item, index) => {
              return (
                <div className="trending-movie-flex-card" key={index}>
                  <Link style={{textDecoration:"none"}} to={`/movies/${item.id  }`}>
                    <div className="card border-0">
                      <img
                        className="trending-movie-img"
                        src={imgBaseUrl + item.poster_path}
                        alt={item.title}
                      />
                      <b>{item.title}</b>
                      <p>{item.release_data}</p>
                    </div>
                 </Link>
                  </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

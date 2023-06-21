import React, { useEffect, useState } from "react";
import trending from "../../repositories/trending";
import { imgBaseUrl } from "../../repositories/repository";
import "./TrendingMovie.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function TrendingMovie() {
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  const [type, setType] = useState("day");
  const { t } = useTranslation();

  async function getTrendingMovie() {
    const currentTrendingMovie = await trending.getTrendingMovie(type);
    setTrendingMovieList(currentTrendingMovie);
  }
  useEffect(() => {
    getTrendingMovie();
  }, [type]);

  return (
    <div className="my-4">
      <div className="trending-flexing">
        <div className="trending-flexing-text">{t("trending")}</div>
        <div className="btn-animation">
     <button
          onClick={() => setType("day")}
          className={`trending-flexing-btn2 ${type == "day" && "active-btn"}`}
        >
          <span>{t("to_day")}</span>
        </button>
        <button
          onClick={() => setType("week")}
          className={`trending-flexing-btn2 ${type == "week" && "active-btn"}`}
        >
          <span>{t("this_week")}</span>
        </button>
        </div>
   
      </div>

      <div className="trending-movie-bgimg">
        <div className="trending-movie-flexing">
          {trendingMovieList &&
            trendingMovieList.map((item, index) => {
              return (
                <div className="trending-movie-flex-card" key={index}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movie/${item.id}`}
                  >
                    <div className="card border-0">
                      <img
                        className="trending-movie-img"
                        src={imgBaseUrl + item.poster_path}
                        alt={item.title}
                      />
                      <b>{item.title}</b>
                      <p>{item.release_date}</p>
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

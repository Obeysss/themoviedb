import React, { useEffect, useState } from "react";
import trending from "../../repositories/trending";
import { imgBaseUrl } from "../../repositories/repository";
import "./TrendingMovie.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
            className={`trending-flexing-btn2 ${
              type == "week" && "active-btn"
            }`}
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
                  <Link className="Link" to={`/movie/${item.id}`}>
                    <div className="card h border-0">
                      <LazyLoadImage
                        effect="blur "
                        src={imgBaseUrl + item.poster_path}
                        alt={item.title}
                        className="trending-movie-img"
                      />

                      <div className="circle">
                        {item.vote_average !== 0 &&
                        Math.round(item.vote_average * 10) > 70 ? (
                          <CircularProgressbar
                            value={Math.round(item.vote_average * 10)}
                            text={`${Math.round(item.vote_average * 10)}%`}
                            background
                            backgroundPadding={2}
                            styles={buildStyles({
                              backgroundColor: "#081c22",
                              textColor: "#fff",
                              pathColor: "#21d07a",
                              trailColor: "#204529",
                              textSize: "30px",
                            })}
                          />
                        ) : item.vote_average !== 0 &&
                          Math.round(item.vote_average * 10) > 45 ? (
                          <CircularProgressbar
                            value={Math.round(item.vote_average * 10)}
                            text={`${Math.round(item.vote_average * 10)}%`}
                            background
                            backgroundPadding={2}
                            styles={buildStyles({
                              backgroundColor: "#081c22",
                              textColor: "#fff",
                              pathColor: "#d2d531",
                              trailColor: "#423D0F",
                              textSize: "30px",
                            })}
                          />
                        ) : (
                          <CircularProgressbar
                            value={Math.round(item.vote_average * 10)}
                            text={
                              item.vote_average !== 0
                                ? `${Math.round(item.vote_average * 10)}%`
                                : "NR"
                            }
                            background
                            backgroundPadding={2}
                            styles={buildStyles({
                              backgroundColor: "#081c22",
                              textColor: "#fff",
                              pathColor: "DB2360",
                              trailColor: "#491532",
                              textSize: "30px",
                            })}
                          />
                        )}
                      </div>

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

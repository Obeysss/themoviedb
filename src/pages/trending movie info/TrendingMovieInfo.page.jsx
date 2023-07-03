import React, { useEffect, useState } from "react";
import { imgBaseUrl } from "../../repositories/repository";
import { Link, useParams } from "react-router-dom";
import trendinginfo from "../../repositories/trendinginfo";
import "./TrendingMovieInfo.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cardSlice";
export default function TrendingMovieInfo() {
  const [trendingMovieInfo, setTrendingMovieInfo] = useState({});
  const { id } = useParams();
  async function getTrendingMovieInfo(id) {
    const currentTrendingMovieInfo = await trendinginfo.getTrendingMovieInfo(
      id
    );
    setTrendingMovieInfo(currentTrendingMovieInfo);
  }



  const dispatch = useDispatch()

  useEffect(() => {
    getTrendingMovieInfo(id);
  }, []);

  function handleClick(product) {
    dispatch(addItem(product))
  }

  return (
    <div>
      {trendingMovieInfo && (
        <div>
          <img
            className="backdrop_path-img"
            src={imgBaseUrl + trendingMovieInfo.backdrop_path}
            alt={trendingMovieInfo.title}
          />
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img
                    className="MovieInfo-poster_path"
                    src={imgBaseUrl + trendingMovieInfo.poster_path}
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <h1 className="MovieInfo-title">
                    {trendingMovieInfo.title}{" "}
                    <span>
                      (
                      {trendingMovieInfo.release_date &&
                        trendingMovieInfo.release_date.split("-")[0]}
                      )
                    </span>
                  </h1>

                  <div className="MovieInfo-createMovieInfo">
                    <p className="MovieInfo-release_date">
                      {trendingMovieInfo.release_date &&
                        trendingMovieInfo.release_date
                          .split("-")
                          .reverse()
                          .join("/")}
                      (
                      {trendingMovieInfo.production_companies &&
                        trendingMovieInfo.production_companies.map(
                          (item, index) => {
                            return (
                              <span key={index}>
                                {item.origin_country}
                                {index !==
                                  trendingMovieInfo.production_companies[0  ]
                                    .length -
                                  1 && " | "}
                              </span>
                              // <span key={index}>
                              //   {trendingMovieInfo.production_companies[0].origin_country}
                              //   {index !== trendingMovieInfo.production_companies.length - 1 && " | "}
                              // </span>
                            );
                          }
                        )}
                      )
                    </p>
                    <p className="MovieInfo-genres">
                      {trendingMovieInfo.genres &&
                        trendingMovieInfo.genres.map((item, index) => {
                          return (
                            <span key={index}>
                              {item.name}
                              {index !== trendingMovieInfo.genres.length - 1 &&
                                " , "}
                            </span>
                          );
                        })}
                    </p>
                  </div>
                  <div className="MovieInfo-menu">
                    <div className="MovieInfo-circle">
                      {trendingMovieInfo.vote_average !== 0 &&
                        Math.round(trendingMovieInfo.vote_average * 10) > 70 ? (
                        <CircularProgressbar
                          value={Math.round(
                            trendingMovieInfo.vote_average * 10
                          )}
                          text={`${Math.round(
                            trendingMovieInfo.vote_average * 10
                          )}%`}
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
                      ) : trendingMovieInfo.vote_average !== 0 &&
                        Math.round(trendingMovieInfo.vote_average * 10) > 45 ? (
                        <CircularProgressbar
                          value={Math.round(
                            trendingMovieInfo.vote_average * 10
                          )}
                          text={`${Math.round(
                            trendingMovieInfo.vote_average * 10
                          )}%`}
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
                          value={Math.round(
                            trendingMovieInfo.vote_average * 10
                          )}
                          text={
                            trendingMovieInfo.vote_average !== 0
                              ? `${Math.round(
                                trendingMovieInfo.vote_average * 10
                              )}%`
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
                    <p className="MovieInfo-menu-user_score">
                      User <br /> Score
                    </p>
                    <div className="MovieInfo-menu-icons">


                      <i onClick={() => handleClick(trendingMovieInfo)} class="fa-solid fa-heart text-light"></i>

                    </div>
                    <div className="MovieInfo-menu-icons">
                      <i class="fa-solid fa-bookmark"></i>
                    </div>
                    <div className="MovieInfo-menu-icons">
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="MovieInfo-tagline">
                    {trendingMovieInfo.tagline}
                  </p>
                  <b className="MovieInfo-overview">Overview</b>
                  <p className="MovieInfo-desc">{trendingMovieInfo.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

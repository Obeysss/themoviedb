import React, { useEffect, useState } from "react";
import { imgBaseUrl } from "../../repositories/repository";
import { Link, useParams } from "react-router-dom";
import trendinginfo from "../../repositories/trendinginfo";
import "./TrendingMovieInfo.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cardSlice";
import { addItem2 } from "../../store/watchList";
export default function TrendingMovieInfo() {
  const { id } = useParams();

  const [trendingMovieInfo, setTrendingMovieInfo] = useState({});
  const [Like, setLike] = useState(null)
  const [Watch, setWatch] = useState(null)

  const localstorage1 = JSON.parse(localStorage.getItem("card"))
  const localstorage2 = JSON.parse(localStorage.getItem("card2"))


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


  function time1() {
    setTimeout(function () {
      let data1 = localstorage1.some(item => {
        return item.id == trendingMovieInfo.id
      })
      setLike(data1)

      let data2 = localstorage2.some(item => {
        return item.id == trendingMovieInfo.id
      })
      setWatch(data2)
    },)
  }
  time1()



  function handleClick1(product) {
    setLike(true)
    dispatch(addItem(product))
  }
  function handleClick2(product) {
    setWatch(true)
    dispatch(addItem2(product))
  }
  return (
    <div>
      {trendingMovieInfo && (
        <div>
         
          {
            (trendingMovieInfo.backdrop_path)?
            <img
            className="backdrop_path-img"
            src={imgBaseUrl + trendingMovieInfo.backdrop_path}
            alt={trendingMovieInfo.title}
          />
          :
          <img
          className="backdrop_path-img"
          src={'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}
          alt={trendingMovieInfo.title}
        />
          }
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  
                  {
                    (trendingMovieInfo.poster_path)?
                    <img
                    className="MovieInfo-poster_path"
                    src={imgBaseUrl + trendingMovieInfo.poster_path}
                    alt=""
                  /> 
                  :
                  <img
                  className="MovieInfo-poster_path"
                  src={'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'}
                  alt=""
                /> 
                  }
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
                                {trendingMovieInfo.production_companies[0].origin_country}
                                {index !== trendingMovieInfo.production_companies.length - 1 && " | "}
                              </span>
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
                    <div onClick={() => handleClick1(trendingMovieInfo)} className="MovieInfo-menu-icons">
                      {/* <i onClick={() => handleClick(trendingMovieInfo)} class="fa-solid fa-heart text-light"></i> */}
                      {
                        (Like) ?
                          <i style={{ color: "rgb(221,86,178)", }} className="fa-solid fa-heart "></i>
                          :
                          <i className="fa-solid fa-heart text-light"></i>
                      }
                    </div>
                    <div onClick={() => handleClick2(trendingMovieInfo)} className="MovieInfo-menu-icons">
                      {
                        (Watch) ?
                          <i style={{ color: "rgb(189,62,57)" }} class="fa-solid fa-bookmark "></i>
                          :
                          <i class="fa-solid fa-bookmark "></i>

                      }
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

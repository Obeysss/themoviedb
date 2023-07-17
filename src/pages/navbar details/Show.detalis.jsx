import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tvshow from "../../repositories/tvshow";
import { imgBaseUrl } from "../../repositories/repository";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cardSlice";
import { addItem2 } from "../../store/watchList";


export default function ShowDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState([]);
  const [Like, setLike] = useState(null)
  const [Watch, setWatch] = useState(null)

  const localstorage1 = JSON.parse(localStorage.getItem("card"))
  const localstorage2 = JSON.parse(localStorage.getItem("card2"))


  async function getShowByName(id) {
    const currentDetails = await tvshow.getShowByName(id);
    setShowDetails(currentDetails);
    console.log(currentDetails);
  }

  const dispatch = useDispatch()


  function handleClick1(product) {
    setLike(true)
    dispatch(addItem(product))
  }
  function handleClick2(product) {
    setWatch(true)
    dispatch(addItem2(product))
  }

  function time1() {
    setTimeout(function () {
      let data1 = localstorage1.some(item => {
        return item.id == showDetails.id
      })
      setLike(data1)

      let data2 = localstorage2.some(item => {
        return item.id == showDetails.id
      })
      setWatch(data2)
    },)
  }
  time1()

  useEffect(() => {
    getShowByName(id);
  }, [id]);


  return <div>
    {showDetails && (
      <div>
        {
          (showDetails.backdrop_path) ?
            <img
              className="backdrop_path-img"
              src={imgBaseUrl + showDetails.backdrop_path}
              alt={showDetails.title}
            />
            :
            <img
              className="backdrop_path-img"
              src={"https://pbs.twimg.com/profile_images/1236850346753789952/PcJkVPUo_400x400.jpg"}
              alt={"no img"}
            />
        }
        <div className="backdrop_path-curtain">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img
                  className="MovieInfo-poster_path"
                  src={imgBaseUrl + showDetails.poster_path}
                  alt=""
                />
              </div>
              <div className="col-9">
                <h1 className="MovieInfo-title">
                  {showDetails.name}{" "}
                  <span>
                    (
                    {showDetails.first_air_date &&
                      showDetails.first_air_date.split("-")[0]}
                    )
                  </span>
                </h1>

                <div className="MovieInfo-createMovieInfo">
                  <p className="MovieInfo-release_date">
                    {showDetails.first_air_date &&
                      showDetails.first_air_date
                        .split("-")
                        .reverse()
                        .join("/")}
                    (
                    {showDetails.production_companies &&
                      showDetails.production_companies.map(
                        (item, index) => {
                          return (
                            <span key={index}>
                              {showDetails.production_companies[0].origin_country}
                              {index !== showDetails.production_companies.length - 1 && " | "}
                            </span>
                          );
                        }
                      )}
                    )
                  </p>
                  <p className="MovieInfo-genres">
                    {showDetails.genres &&
                      showDetails.genres.map((item, index) => {
                        return (
                          <span key={index}>
                            {item.name}
                            {index !== showDetails.genres.length - 1 &&
                              " , "}
                          </span>
                        );
                      })}
                  </p>
                </div>


                <div className="MovieInfo-menu">
                  <div className="MovieInfo-circle">
                    {showDetails.vote_average !== 0 &&
                      Math.round(showDetails.vote_average * 10) > 70 ? (
                      <CircularProgressbar
                        value={Math.round(
                          showDetails.vote_average * 10
                        )}
                        text={`${Math.round(
                          showDetails.vote_average * 10
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
                    ) : showDetails.vote_average !== 0 &&
                      Math.round(showDetails.vote_average * 10) > 45 ? (
                      <CircularProgressbar
                        value={Math.round(
                          showDetails.vote_average * 10
                        )}
                        text={`${Math.round(
                          showDetails.vote_average * 10
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
                          showDetails.vote_average * 10
                        )}
                        text={
                          showDetails.vote_average !== 0
                            ? `${Math.round(
                              showDetails.vote_average * 10
                            )}%`
                            : "NR"
                        }
                        background
                        backgroundPadding={2}
                        styles={buildStyles({
                          backgroundColor: "#081c22",
                          textColor: "#fff",
                          pathColor: "#C22158",
                          trailColor: "#491532",
                          textSize: "30px",
                        })}
                      />
                    )}
                  </div>
                  <p className="MovieInfo-menu-user_score">
                    User <br /> Score
                  </p>
                  <div  onClick={() => handleClick1(showDetails)} className="MovieInfo-menu-icons">
                    {
                      (Like) ?
                        <i style={{ color: "rgb(221,86,178)", }} className="fa-solid fa-heart "></i>
                        :
                        <i className="fa-solid fa-heart text-light"></i>
                    }
                  </div>
                  <div onClick={() => handleClick2(showDetails)} className="MovieInfo-menu-icons">
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

                <b className="MovieInfo-overview">Overview</b>
                <p className="MovieInfo-desc">{showDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>;
}

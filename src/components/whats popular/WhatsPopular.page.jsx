import React, { useEffect, useState } from "react";
import whatspopular from "../../repositories/whatspopular";
import { imgBaseUrl } from "../../repositories/repository";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../components/tranding movie/TrendingMovie.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function WhatsPopularPage() {
  const [whatsPopularMovieList, setWhatsPopularMovieList] = useState([]);
  const [type, setType] = useState("tv");
  const { t } = useTranslation();

  async function getWhatsPopularMovie(type) {
    const curretWhatsPopularMovie = await whatspopular.getWhatsPopularMovie(
      type
    );
    setWhatsPopularMovieList(curretWhatsPopularMovie.results);
  }
  useEffect(() => {
    getWhatsPopularMovie(type);
  }, [type]);
  return (
    <div className="my-4">
      <div className="trending-flexing">
        <div className="trending-flexing-text">{t("whats_popular")}</div>
        <div className="btn-animation">
          <button
            onClick={() => setType("tv")}
            className={`trending-flexing-btn2 ${type == "tv" && "active-btn"}`}
          >
            <span> {t("on_tvs")}</span>
          </button>
          <button
            onClick={() => setType("movie")}
            className={`trending-flexing-btn2 ${
              type == "movie" && "active-btn"
            }`}
          >
            <span>{t("in_theaters")}</span>
          </button>
        </div>
      </div>

      <div className="trending-movie-flexing">
        {whatsPopularMovieList &&
          whatsPopularMovieList.map((item, index) => {
            return (
              <div className="trending-movie-flex-card" key={index}>
                <Link
                  className="Link"
                  to={
                    type == "tv"
                      ? `/tv/show_details/${item.id}`
                      : `/movie/${item.id}`
                  }
                >
                  <div className="card border-0">
                    <LazyLoadImage
                      effect="blur "
                      src={imgBaseUrl + item.poster_path}
                      alt={item.title}
                      className="trending-movie-img"
                    />
                    <div className="circle">
                      {Math.round(item.vote_average * 10) > 70 ? (
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
                      ) : Math.round(item.vote_average * 10) > 45 ? (
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
                          text={`${Math.round(item.vote_average * 10)}%`}
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
                    <b>{item.title}</b>
                    <b>{item.name}</b>
                    <p>{item.release_date}</p>
                    <p>{item.first_air_date}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

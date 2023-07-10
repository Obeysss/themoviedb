import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
export default function Navbar() {
  const moviePoint = "/movies/";
  const showPoint = "/tv/";
  const [Open, setOpen] = useState("none")
  const { t, i18n } = useTranslation();
  const { card } = useSelector(state => state)
  const { card2 } = useSelector(state => state)
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };


  function Settings() {
    if (Open == "none") {
      setOpen("inline")
    } else {
      setOpen("none")

    }
  }

  return (
    <div className="navStiky">
      <div className="navbar">
        <ul className="navbar-ul">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Logotype"
              className="logotype"
              draggable="false"
            />
          </Link>
          <li className="navbar-ul-li">
            {t("movies")}
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "popular"}
              >
                <li>{t("popular")}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "now_playing"}
              >
                <li>{t("now_playing")}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "upcoming"}
              >
                <li>{t("upcoming")}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "top_rated"}
              >
                <li>{t("top_rated")}</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            {t("tv_show")}
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "popular"}
              >
                <li>{t("popular")}</li>
              </Link>
              <Link
                to={showPoint + "airing_today"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>{t("airing_today")}</li>
              </Link>
              <Link
                to={showPoint + "on_the_air"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>{t("on_tv")}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "top_rated"}
              >
                <li>{t("top_rated")}</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            {t("people")}
            <ul className="navbar-ul-ul2">
              <Link
                to={"/person"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>{t("poular_people")}</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            {t("more")}
            <ul className="navbar-ul-ul">
              <li>{t("discussions")}</li>
              <li>{t("leader_board")}</li>
              <li>{t("support")}</li>
              <li>API</li>
            </ul>
          </li>
        </ul>

        <ul className="navbar-ul2 m-0 d-flex gap-4">
          <li>
            <i className="fa-solid fa-plus"></i>
          </li>
          <li>
            {/* <div className="btn-flexing"> */}
            <button
              onClick={() => changeLanguage("en")}
              className="Language_button"
            >
              EN
            </button>

            {/* </div> */}
          </li>
          <li>
            {" "}
            <button
              onClick={() => changeLanguage("ru")}
              className="Language_button"
            >
              RU
            </button>
          </li>
          <li>
            <i className="fa-solid fa-bell "></i>
          </li>
          <li>
            <div className="navbar-settings-open" onClick={Settings}>O</div>
            <div className="navbar-settings-close" style={{ display: `${Open}` }}>
              <p className="navbar-settings-close-name">Oybek</p>
              <p className="navbar-settings-close-view-profile">View profile</p>
              <div className="navbar-setting-close-hr" />
              <Link className="text-danger d-flex text-decoration-none favourite" to={'/Favourite '}>
                <span className="favourite-title">Favourite</span>
                <div className="favourite-count">
                  <b>{card.length}</b>
                </div>
              </Link>
              <Link className="text-danger d-flex text-decoration-none favourite" to={'/Watchlist'}>
                <span className="favourite-title">Watchlist</span>
                <div className="favourite-count">
                  <b>{card2.length}</b>
                </div>
              </Link>
            </div>

          </li>
          <li>
            <i className="fa-sharp fa-solid fa-magnifying-glass "></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

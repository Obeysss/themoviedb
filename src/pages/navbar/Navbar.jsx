import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const moviePoint = "/movie/";
  const showPoint = "/tv/";
  return (
    <div>
      <div className="navbar">
        <Link to={"/"}>
          <img src={Logo} alt="Logotype" className="logotype" />
        </Link>
        <ul className="navbar-ul">
          <li className="navbar-ul-li">
            Фильмы
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "popular"}
              >
                <li>Популярные</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "now_playing"}
              >
                <li>Смотрят сейчас</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "upcoming"}
              >
                <li>Ожидаемые</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "top_rated"}
              >
                <li>Лучшие</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            Сериалы
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "popular"}
              >
                <li>Популярные</li>
              </Link>
              <Link
                to={showPoint + "airing_today"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>В эфире сегодня</li>
              </Link>
              <Link
                to={showPoint + "on_the_air"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>По телевидению</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "top_rated"}
              >
                <li>Лучшие</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            Люди
            <ul className="navbar-ul-ul2">
              <Link to={'/person'} style={{ textDecoration: "none", color: "black" }}
              >  
              
              <li>Популярные Люди</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            Ещё
            <ul className="navbar-ul-ul">
              <li>Обсуждение</li>
              <li>Доска посчёта</li>
              <li>Поддержка</li>
              <li>API</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

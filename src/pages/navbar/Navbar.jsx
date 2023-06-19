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
            Movies
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "popular"}
              >
                <li>Popular</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "now_playing"}
              >
                <li>Now Playing</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "upcoming"}
              >
                <li>Upcoming</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "top_rated"}
              >
                <li>Top Rated</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            TV Shows
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "popular"}
              >
                <li>Popular</li>
              </Link>
              <Link
                to={showPoint + "airing_today"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>Airing Today</li>
              </Link>
              <Link
                to={showPoint + "on_the_air"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>On TV</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "top_rated"}
              >
                <li>Top Rated</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            People
            <ul className="navbar-ul-ul2">
              <Link
                to={"/person"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>Popular People</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            More
            <ul className="navbar-ul-ul">
              <li>Discussions</li>
              <li>Leaderboard</li>
              <li>Suppot</li>
              <li>API</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

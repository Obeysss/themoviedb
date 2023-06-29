import React from "react";
import { imgBaseUrl } from "../../repositories/repository";
import "./ContentCardComponent.css";
import { Link } from "react-router-dom";
export default function ContentCardComponent(props) {
  return props.movieList.map((item, index) => {
    return (
      <div style={{ width: "calc(100% / 5)" }} key={index} className=" my-3">
        {" "}
        <Link className="Link" to={`/movies_details/${item.id}`}>
        <div className="card">
            <img src={imgBaseUrl + item.poster_path} alt={item.title} />
            <b>{item.title}</b>
            <p>{item.release_date}</p>
          </div>
        </Link>
          
      </div>
    );
  });
}

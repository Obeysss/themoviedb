import React from "react";
import { imgBaseUrl } from "../../repositories/repository";
import { Link } from "react-router-dom";

export default function ShowsCardComponent(props) {
  return props.showList.map((item, index) => {
    return (
      <div key={index} className="col-3 my-3">
        <Link to={`/shows_details/${item.id}`}>
          <div className="card">
            <img src={imgBaseUrl + item.poster_path} alt={item.name} />
            <b>{item.name}</b>
          </div>
        </Link>
      </div>
    );
  });
}

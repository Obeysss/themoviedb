import React from "react";
import { imgBaseUrl } from "../../repositories/repository";
import { Link } from "react-router-dom";

export default function PersonsCardComponent(props) {
  return (
    <>
      {props.personList &&
        props.personList.map((item, index) => (
          <div style={{ width: "calc(100% / 5)" }} className="my-3" key={index}>
            <Link to={`/person_details/${item.id}`} className="Link">
              <div className="card">
                <img src={imgBaseUrl + item.profile_path} alt={item.name} />
                <b>{item.name}</b>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

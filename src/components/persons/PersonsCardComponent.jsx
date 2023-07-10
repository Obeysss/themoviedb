import React from "react";
import { imgBaseUrl } from "../../repositories/repository";
import { Link } from "react-router-dom";
import './PersonCardComponent.css'
export default function PersonsCardComponent(props) {
  console.log(props
  );
  return (
    <>
      {props.personList &&
        props.personList.map((item, index) => (
          <div style={{ width: "calc(100% / 5)" }} className="my-3" key={index}>
            <Link to={`/person_details/${item.id}`} className="Link">
              <div className="card">
                {
                  (item.profile_path) ?
                    <img className="person-img" src={imgBaseUrl + item.profile_path} alt={item.name} />
                    :
                    <img className="person-img" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" alt={item.name} />
                }
                <b>{item.name}</b>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

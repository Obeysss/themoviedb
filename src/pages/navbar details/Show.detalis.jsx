import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tvshow from "../../repositories/tvshow";
import { imgBaseUrl } from "../../repositories/repository";

export default function ShowDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState([]);

  async function getShowByName(id) {
    const currentDetails = await tvshow.getShowByName(id);
    setShowDetails(currentDetails);
  }

  useEffect(() => {
    getShowByName(id);
  }, [id]);

  console.log(showDetails);

  return <div>
      {showDetails && (
            <div>
              <img
                className="backdrop_path-img"
                src={imgBaseUrl + showDetails.backdrop_path}
                alt={showDetails.title}
              />
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
                        <span>{`(${showDetails.first_air_date})`}</span>
                      </h1>
                      
                      <b className="MovieInfo-overview">Overview</b>
                      <p className="MovieInfo-desc">We don't have an overview translated in English. Help us expand our database by adding one.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
  </div>;
}

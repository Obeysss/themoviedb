import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchval from "../../repositories/searchval";
import { baseUrl, imgBaseUrl } from "../../repositories/repository";
// import { current } from "@reduxjs/toolkit";

export default function SearchPage() {
  const [search, setSearch] = useState([]);
  const params = useParams();

  async function getTrendingMovieInfo(props) {
    const currentTrendingMovieInfo = await searchval.getSearchName(props);
    setSearch(currentTrendingMovieInfo.results);
    
  }

  useEffect(() => {
    console.log(params);
    getTrendingMovieInfo(params);
  }, []);

  return (
    <div>
      <div className="row g-0">
        {search.length > 0 ? (
          <>
            {search.map((res, i) => {
              return (
                <div className="col-12 row" key={i}>
                  <div className="col-12 col-sm-4 col-md-3">
                    <img
                      width={"100%"}
                      src={imgBaseUrl + res.poster_path}
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-sm-8 col-md-9">
                    <h1>{res.title}</h1>
                    <p>{res.overview}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>loading...</>
        )}
      </div>
    </div>
  );
}
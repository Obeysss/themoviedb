import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import searchval from "../../repositories/searchval";
import { imgBaseUrl } from "../../repositories/repository";
import "./Search.page.css";
export default function SearchPage() {
  const [search, setSearch] = useState([]);
  const { title } = useParams();

  
  async function getTrendingMovieInfo(props) {
    const currentTrendingMovieInfo = await searchval.getSearchName(props);
    setSearch(currentTrendingMovieInfo.results);
  }

  useEffect(() => {
    getTrendingMovieInfo(title);
  }, []);
  return (
    <div>
      <div className="row g-0">
        {search.length > 0 ? (
          <>
            {search.map((item, index) => {
              return (
                <Link to={item.media_type == "tv" ? `/tv/show_details/${item.id}` : `/movie/${item.id}`} className="Link">
                 <div className="search_card" key={index}>
                  <div className="search_card-flexing">
                    <div className="search_card-felxing-left">
                      <img className="search_card_img" src={imgBaseUrl + item.poster_path} alt="" />
                    </div>
                    <div className="search_card-felxing-right">
                      <h5><b>{item.title}</b></h5>
                      <h5><b>{item.name}</b></h5>
                      <p className="search_card-felxing-right-title">{item.release_date}</p>
                      <p className="search_card-felxing-right-title">{item.first_air_date}</p>
                      <p>{item.overview}</p>
                    </div>
                  </div>
                </div>
                </Link>
               
              );
            })}
          </>
        ) : (
          <div style={{textAlign:"center",height:"42.9vh",fontSize:"50px",paddingTop:"50px"}}>We couldn't find the movie you are looking for or your internet is down😢</div>
        )}
      </div>
    </div>
  );
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { imgBaseUrl } from "../../repositories/repository";
import { Link } from 'react-router-dom';
import { removeItem2 } from '../../store/watchList';
import './Watchlist.css'

export default function Watchlist() {
  const { card2 } = useSelector(state => state);
  const dispatch = useDispatch();
  function handleCLick(id) {
    dispatch(removeItem2(id))
  }
//   console.log(card);
  return (
    <div className='shopping'>
      <h1 className='shopping-title'><span>Your Watchlist Films</span> </h1>


      {card2.length > 0 ? (
        <div>
          {card2.map((item) => (
            <div className="shopping-card" key={item.id}>
              <Link to={item.media_type == "tv" ? `/tv/show_details/${item.id}` : `/movie/${item.id}`} className="Link">
                <div className="shopping-card-flexing">
                  <div className="shopping-card-felxing-left">
                    <img className="shopping-card_img" src={imgBaseUrl + item.poster_path} alt="" />
                  </div>
                  <div className="shopping-card-felxing-right">
                    <h5><b>{item.title}</b></h5>
                    <h5><b>{item.name}</b></h5>
                    <p className="shopping-card-felxing-right-title">{item.release_date}</p>
                    <p className="shopping-card-felxing-right-title">{item.first_air_date}</p>
                    <p>{item.overview}</p>
                  </div>
                </div>
              </Link>
              <span className='shopping-delete'>
                <i class="fa-solid fa-trash" onClick={() => handleCLick(item.id)}></i>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <h3 className='no__featured_movie'>No Featured Movie</h3>
      )}

    </div>
  )
}

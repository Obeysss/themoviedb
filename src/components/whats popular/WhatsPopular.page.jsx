import React, { useEffect, useState } from 'react'
import whatspopular from '../../repositories/whatspopular'
import { imgBaseUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../components/tranding movie/TrendingMovie.css'

export default function WhatsPopularPage() {
const  [ whatsPopularMovieList,setWhatsPopularMovieList]= useState([])
const [type,setType]= useState('tv')
const {t} = useTranslation()


    async function getWhatsPopularMovie(type){
      const curretWhatsPopularMovie = await whatspopular.getWhatsPopularMovie(type)
      setWhatsPopularMovieList(curretWhatsPopularMovie.results)
    }
    useEffect(()=>{
    getWhatsPopularMovie(type)
    },[type])
  return (
    <div className='my-4'>
     <div className="trending-flexing">
      <div className="trending-flexing-text">{t('whats_popular')}</div>
      <div className="btn-animation">
        <button onClick={()=>setType('tv')} className={`trending-flexing-btn2 ${type=='tv'&&'active-btn'}`}><span> {t('on_tvs')}</span></button>
        <button onClick={()=>setType('movie')} className={`trending-flexing-btn2 ${type=='movie'&&'active-btn'}`}><span>{t('in_theaters')}</span></button>
      </div>
     </div>


     <div className="trending-movie-flexing">
      {
        whatsPopularMovieList && whatsPopularMovieList.map((item,index)=>{
          return (
            <div className="trending-movie-flex-card" key={index}>
            <Link
              style={{ textDecoration: "none" }}
              to={type == "tv" ?`/shows_details/${item.id}` : `/movie/${item.id}`} 
            >
              <div className="card border-0">
                <img
                  className="trending-movie-img"
                  src={imgBaseUrl + item.poster_path}
                  alt={item.title}
                />
                <b>{item.title}</b>
                <b>{item.name}</b>
                <p>{item.release_date}</p>
                <p>{item.first_air_date}</p>
              </div>
            </Link>
          </div>
          )
        })
      }
     </div>
    </div>
  )
}

import React from 'react'
import './Search.css'


export default function Search() {
  return (
    <div>
    <div className='serach-background-image'>
     <div className='search-title'>Welcome.</div>
     <div className="search-desc">Millions of movies, TV shows and people to discover. Explore now.</div>
     <input type="text" placeholder='Search for a movie,tv show,person......' className='search-inp_search'/>
     <button className='search-btn_search'>Search</button>
    </div>
    </div>
  )
}

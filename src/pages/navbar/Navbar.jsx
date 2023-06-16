import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <img src={Logo} alt="Logotype" className='logotype' />
            <ul className='navbar-ul'>
            <li className='navbar-ul-li'>Фильмы
                <ul className='navbar-ul-ul'>
                    <Link style={{textDecoration:"none",color:"black"}} to={'/movies/popular'}>
                    
                    <li>Популярные</li>
                    </Link>
                    <Link  style={{textDecoration:"none",color:"black"}} to={'/movies/now_playing'}>

                    <li>Смотрят сейчас</li>
                    </Link>
                    <Link style={{textDecoration:"none",color:"black"}} to={'/movies/upcoming'}>

                    <li>Ожидаемые</li>
                    </Link>
                    <Link style={{textDecoration:"none",color:"black"}} to={'/movies/top_rated'}>
                    
                    <li>Лучшие</li>
                    </Link>
                </ul>
            </li>
            <li className='navbar-ul-li'>Сериалы
            <ul className='navbar-ul-ul'>
                    <li>Популярные</li>
                    <li>В эфире сегодня</li>
                    <li>По телевидению</li>
                    <li>Лучшие</li>
                </ul>
            </li>
            <li className='navbar-ul-li'>Люди
            <ul className='navbar-ul-ul2'>
                    <li>Популярные Люди</li>
                   
                </ul>
            </li>
            <li className='navbar-ul-li'>Ещё
            <ul className='navbar-ul-ul'>
                    <li>Обсуждение</li>
                    <li>Доска посчёта</li>
                    <li>Поддержка</li>
                    <li>API</li>
                </ul>
            </li>
        </ul>
      
      
        </div>

      
    </div>
  )
}

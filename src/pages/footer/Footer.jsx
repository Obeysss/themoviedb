import React from 'react'
import footerLogo from '../../assets/logo.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
          <div className='Footer pt-5'>
      <div className='container d-flex justify-content-center gap-5'>
        <div className='d-flex flex-column gap-5'>
          <img src={footerLogo} alt="" className='imgFooter'/>
         <Link to={'https://www.themoviedb.org/signup'}>
         <button className="btn btn-light p-2">JOIN THE COMMUNITY</button>
         </Link>
        </div>
        <div className='d-flex flex-column pt-5 gap-1'>
          <h3 className='texth3'>THE BASICS</h3>
          <p className='text '>About TMDB</p>
          <p className='text '>Contact Us</p>
          <p className='text '>Support Forums</p>
          <p className='text '>API</p>
          <p className='text '>System Status</p>
        </div>
        <div className='d-flex flex-column pt-5 gap-1'>
          <h3 className='texth3'>GET INVOLVED</h3>
          <p className='text '>Contribution Bible</p>
          <p className='text '>Add New Movie</p>
          <p className='text '>Add New TV Show</p>
        </div>
        <div className='d-flex flex-column pt-5 gap-1'>
          <h3 className='texth3'>COMMUNITY</h3>
          <p className='text '>Guidelines</p>
          <p className='text '>Discussions</p>
          <p className='text '>Leaderboard</p>
          <p className='text '>Twitter</p>
        </div>
        <div className='d-flex flex-column pt-5 gap-1'>
          <h3 className='texth3'>LEGAL</h3>
          <p className='text '>
            Terms of Use</p>
          <p className='text '>API Terms of Use</p>
          <p className='text '>Privacy Policy</p>
        </div>
      </div>
    </div>
    </div>
  )
}

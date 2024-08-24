import React from 'react'
import './banner.scss'
import { FaSearch } from 'react-icons/fa';
import banner from '../images/home-banner1.png'

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}

export default Banner


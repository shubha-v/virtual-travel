import React from 'react'
import './holiday.scss'
import beach from '../images/holidaytheme-1.jpg'
import adventure from '../images/holidaytheme-3.jpg'
import mountain from '../images/holidaytheme-2.jpg'

const Holiday = () => {
  return (
    <div className="holiday-cards">
      <h2 className="heading">Holiday Themes</h2>
      <div className="cards">
        <div className="card">
          <img src={beach} alt="Beach" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Beach</h3>
          </div>
        </div>
        <div className="card">
          <img src={adventure} alt="Adventure" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Adventure</h3>
          </div>
        </div>
        <div className="card">
          <img src={mountain} alt="Cultural" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Mountain</h3>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Holiday
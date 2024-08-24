import React from 'react'
import pondicherry from '../images/destination-1.jpg'
import kerela from '../images/destination-2.jpg'
import goa from '../images/destination-3.jpg'
import './destination.scss'

const Destination = () => {
  return (
      <div className="destination-cards">
      <h2 className="destination-heading">Destination</h2>
      <div className="destinations-cards">
        <div className="destination-card">
          <img src={pondicherry} alt="pondicherry" className="card-image" />
          <div className="destination-card-content">
            <h3 className="destination-card-title">Pondicherry</h3>
          </div>
        </div>
        <div className="destination-card">
          <img src={kerela} alt="kerela" className="card-image" />
          <div className="destination-card-content">
            <h3 className="destination-card-title">Kerela</h3>
          </div>
        </div>
        <div className="destination-card">
          <img src={goa} alt="goa" className="card-image" />
          <div className="destination-card-content">
            <h3 className="destination-card-title">Goa</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination

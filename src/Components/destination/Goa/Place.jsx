// src/components/Tabs.js
import React, { useState } from 'react';
// import '../Goa/goa.scss';
import { Typography } from '@mui/material';
import { TbPlaneInflight } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import { BsTrainFreightFront } from "react-icons/bs";

const Place = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </div>
          <div
            className={`tab ${activeTab === 'things-to-do' ? 'active' : ''}`}
            onClick={() => setActiveTab('things-to-do')}
          >
            Things to Do
          </div>
          <div
            className={`tab ${activeTab === 'places-to-visit' ? 'active' : ''}`}
            onClick={() => setActiveTab('places-to-visit')}
          >
            Places to Visit
          </div>
          <div
            className={`tab ${activeTab === 'best-time-to-visit' ? 'active' : ''}`}
            onClick={() => setActiveTab('best-time-to-visit')}
          >
            Best time to Visit
          </div>
        </div>
      </div>
      <div className="tab-content-container">
        {activeTab === 'overview' && <div>
          <p className="goaoverview"  >Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.
            It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west.
            It is India's smallest state by area and fourth-smallest by population.Panaji is the state's capital, while Vasco da Gama is its largest city.
            The historic city of Margão in Goa still exhibits the cultural influence of the Portuguese, who first voyaged to the subcontinent in the early 16th century as merchants, and conquered it soon thereafter, whereupon Goa became an overseas territory of the Portuguese Empire, part of what was then known as Portuguese India, and remained as such for about 456 years until it was annexed by India in 1961. Goa's official language, which is spoken by a majority of its inhabitants, is Konkani.</p>
          <br /><hr /><br />

          <Typography variant="h4">How to reach</Typography><br />
          <p className="goaoverview"><b> <TbPlaneInflight />  From Flight</b></p>
          <p className="goaoverview">To reach Goa from Bangalore by flight, you can fly into Goa International Airport (GOI) in Dabolim, which is about 30 km from Panaji, Goa's capital city.
            The airport has one terminal and runway for both domestic and international flights.</p>

          <br />
          <p className="goaoverview"><b><FaCarRear />  From road</b></p>
          <p className="goaoverview">Plenty of long-distance inter-state luxury and budget buses run from major cities such as Mumbai, Pune, Bangalore, New Delhi to Goa. State-run bus service, Kadamba Transport is also a good option. Other state bus services - Maharashtra, Karnataka, Andhra Pradesh - also have daily buses going to Goa. Various private players also run buses connecting many cities to Goa. For comfortable rides, super deluxe AC and Volvo buses would be the better options. These would generally cost between INR 1500 - INR 2500 depending on the distance and type of bus.
          </p>

          <br />
          <p className="goaoverview"><b><BsTrainFreightFront />  From train</b></p>
          <p className="goaoverview">Goa has six railway stations out of which the Madgaon Station is the biggest. Most people usually get down at Madgaon or Vasco-da-Gama in South Goa and Thivim in North Goa for Mapusa and other beaches. Other smaller stations include Pernem for Arambol, Karmali (Old Goa) for Panjim and Canacona for Palolem.
          </p>
        </div>
        }
        {activeTab === 'things-to-do' && <div>Things to Do Content</div>}
        {activeTab === 'places-to-visit' && <div>Places to Visit Content</div>}
        {activeTab === 'best-time-to-visit' && <div>Best Time to Visit Content</div>}
      </div>
    </div>
  );
};

export default Place;

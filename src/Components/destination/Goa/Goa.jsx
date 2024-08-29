import React, { useState } from 'react';
import { Breadcrumbs, Link, Typography, Tabs, Tab, Box } from '@mui/material';
import goa from '../../videos/goa/baga-beach-goa.mp4'
import Navbar from '../../Navbar/Navbar'
import '../Goa/goa.scss';
import { TbPlaneInflight } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import { BsTrainFreightFront } from "react-icons/bs";

const Goa = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    };

    return (
        <>
            <Navbar />
            <div className="banner">
            <video src={goa} autoPlay loop muted playsInline className="banner-video"></video>
                <div class="text">Goa</div>
            </div>
            <div>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs value={activeTab} onChange={handleTabChange} centered>
                        <Tab label="Overview" />
                        <Tab label="Things to Do" />
                        <Tab label="Places to Visit" />
                        <Tab label="Best time to visit" />
                    </Tabs>
                </Box>

                {/* Breadcrumbs */}
                <Box sx={{ m: 2 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/destination/"
                            onClick={handleClick}
                        >
                            destination-guide
                        </Link>
                        <Typography color="text.primary">goa</Typography>
                    </Breadcrumbs>
                </Box>

                {/* Tab Content */}
                <TabPanel value={activeTab} index={0}>
                    <Typography variant="h4">Goa Overview</Typography><br />
                    <p className="tab"  >Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.
                        It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west.
                        It is India's smallest state by area and fourth-smallest by population.Panaji is the state's capital, while Vasco da Gama is its largest city.
                        The historic city of Margão in Goa still exhibits the cultural influence of the Portuguese, who first voyaged to the subcontinent in the early 16th century as merchants, and conquered it soon thereafter, whereupon Goa became an overseas territory of the Portuguese Empire, part of what was then known as Portuguese India, and remained as such for about 456 years until it was annexed by India in 1961. Goa's official language, which is spoken by a majority of its inhabitants, is Konkani.</p>
                    <br /><br /><hr /><br /><br />

                    <Typography variant="h4">How to reach</Typography><br />
                    <p className="tab"><b> <TbPlaneInflight />  From Flight</b></p>
                    <p className="tab">To reach Goa from Bangalore by flight, you can fly into Goa International Airport (GOI) in Dabolim, which is about 30 km from Panaji, Goa's capital city.
                        The airport has one terminal and runway for both domestic and international flights.</p>

                    <br />
                    <p className="tab"><b><FaCarRear />  From road</b></p>
                    <p className="tab">Plenty of long-distance inter-state luxury and budget buses run from major cities such as Mumbai, Pune, Bangalore, New Delhi to Goa. State-run bus service, Kadamba Transport is also a good option. Other state bus services - Maharashtra, Karnataka, Andhra Pradesh - also have daily buses going to Goa. Various private players also run buses connecting many cities to Goa. For comfortable rides, super deluxe AC and Volvo buses would be the better options. These would generally cost between INR 1500 - INR 2500 depending on the distance and type of bus.
                    </p>

                    <br />
                    <p className="tab"><b><BsTrainFreightFront />  From train</b></p>
                    <p className="tab">Goa has six railway stations out of which the Madgaon Station is the biggest. Most people usually get down at Madgaon or Vasco-da-Gama in South Goa and Thivim in North Goa for Mapusa and other beaches. Other smaller stations include Pernem for Arambol, Karmali (Old Goa) for Panjim and Canacona for Palolem.
                    </p>

                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                    <Typography variant="h4">Things to Do Content</Typography>
                    <p>Details about things to do...</p>
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                    <Typography variant="h4">Places to Visit Content</Typography>
                    <p>Details about places to visit...</p>
                </TabPanel>
                <TabPanel value={activeTab} index={3}>
                    <Typography variant="h4">Best time to visit</Typography><br/>
                    <p><b><u>Peak Season: Late October to Early March</u></b></p><br/>
                    <p className="tab"><b>Weather:</b> This is the winter season in Goa, with daytime temperatures ranging from 20°C to 30°C (68°F to 86°F). The weather is cool and pleasant, making it perfect for beach activities, outdoor excursions, and sightseeing.
                        The humidity is low, and the sea is calm, ideal for swimming, water sports, and boat cruises.</p><br/>
                    <p className="tab"><b>Festivals and Events:</b> This period is packed with cultural events and festivals. 
                        Christmas and New Year celebrations in Goa are famous, with beach parties, fireworks, and music festivals like Sunburn and VH1 Supersonic attracting tourists from all over the world. 
                        The Goa Carnival in February is another highlight, featuring parades, dances, music, and street performances.</p><br/>
                    <p className="tab"><b>Tourism Infrastructure:</b> During this time, most beach shacks, restaurants, and clubs are open and bustling with activity. 
                        Accommodation options range from luxury resorts to budget guesthouses, but it's advisable to book in advance due to the high demand.</p><br/>

                    <br/>
                    <p><b><u>Shoulder Season: March and October</u></b></p><br/>
                    <p className="tab"><b>Weather:</b> March marks the end of winter, and temperatures begin to rise, reaching up to 35°C (95°F) by the end of the month.
                        October, on the other hand, sees the tail end of the monsoon, with occasional showers and gradually decreasing humidity.
                        These months are still comfortable for outdoor activities, though the beaches might be less crowded.</p><br/>
                    <p className="tab"><b>Tourism Activity:</b> There are fewer tourists during these months, making it a great time for those who prefer a quieter experience.
                    You'll find better deals on accommodation and fewer crowds at popular tourist spots.</p><br/>

                    <br/>
                    <p><b><u>Off-Season: June to September (Monsoon)</u></b></p><br/>
                    <p className="tab"><b>Weather:</b> The monsoon season brings heavy rainfall to Goa, transforming the landscape into a lush, green paradise. 
                        However, the rains can be unpredictable, and beach activities are limited due to rough seas and strong currents. 
                        The average temperature during the monsoon hovers around 25°C to 30°C (77°F to 86°F), with high humidity.</p><br/>
                    <p className="tab"><b>Experience:</b> This is the best time to enjoy Goa's natural beauty, with waterfalls, spice plantations, and wildlife sanctuaries at their best. 
                        Monsoon tourism is growing in popularity, with activities like trekking, river rafting, and visiting offbeat locations becoming more common. 
                        You'll also experience Goa in its most serene state, with fewer tourists around.</p><br/>
                    <p className="tab"><b>Cultural Events:</b>The monsoon season is marked by local festivals like Sao Joao (the festival of fertility) in June, where locals celebrate by jumping into wells and water bodies, and Ganesh Chaturthi in September, which is a major Hindu festival in Goa.</p><br/>
                    <p className="tab"><b>Accommodation and Deals:</b>This is the cheapest time to visit Goa, with many resorts and hotels offering significant discounts. However, some beach shacks and restaurants might be closed during this period.</p><br/>
                    <br /><hr /><br /><br />
                </TabPanel>
            </div>
        </>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default Goa
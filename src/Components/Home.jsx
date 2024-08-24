import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Holiday from './holiday/Holiday'
import Destination from './destination/Destination'
import Footer from './Footer/Footer'
import Header from './Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Holiday/>
      <Destination/>
      <Footer/>
    </>
  )
}

export default Home

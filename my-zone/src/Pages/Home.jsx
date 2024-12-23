import React from 'react'
import Header from '../components/Header'
import SearchSection from '../components/SearchSection'

import LatestNews from '../components/LatestNews'
import FeaturedNews from '../components/FeaturedNews'
import Posts from '../components/Posts'
import Subscribe from '../components/Subscribe'
import MainTopics from '../components/MainTopics'
import Authors from '../components/Authors'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Header/>
      <SearchSection/>
      <LatestNews/>
      <FeaturedNews/>
      <Posts/>
      <Subscribe/>
      <MainTopics/>
      <Authors/>
      <Footer/>
    </>
  )
}

export default Home

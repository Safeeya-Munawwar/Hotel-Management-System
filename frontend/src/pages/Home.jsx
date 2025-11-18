import React from 'react'
import Navbar from '../components/Navbar'
import HeroVideo from '../components/HeroVideo'
import Booking from '../components/Booking'
import HeroBanner from '../components/HeroBanner'
import OfferSection from '../components/OfferSection'
import WhyBookWithUs from '../components/WhyBookWithUs'
import Accommodation from '../components/Accommodation'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroVideo/>
      <Booking/>
      <HeroBanner/>
      <OfferSection/>
      <WhyBookWithUs/>
      <Accommodation/>
    </div>
  )
}

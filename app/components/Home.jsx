import React from 'react'
import HeroSection from './heroSection'
import Testimonials from './testimonials'
import Properties from './Properties'
import Footer from './footer'
import QuickServiceForm from './form'
import ChannelManager from './channelManager'
import BestDeals from './BestDeals'
import NewestDeals from'./Properties'

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <ChannelManager/>
            <NewestDeals/>
            <BestDeals/>
            <Testimonials />
            <QuickServiceForm />
            <Footer />
            
        </>
    )
}

export default Homepage


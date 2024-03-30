import React from 'react'
import HeroSection from './heroSection'
import Testimonials from './testimonials'
import Properties from './Properties'
import Footer from './footer'
import QuickServiceForm from './form'

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <Properties />
            <Testimonials />
            <QuickServiceForm />
            <Footer />
        </>
    )
}

export default Homepage


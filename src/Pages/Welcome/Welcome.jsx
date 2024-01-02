import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import WhyUs from '../../components/WhyUs/WhyUs'
import Clients from '../../components/Clients/Clients'
import Dummy from '../../components/Dummy/Dummy'
import Footer from '../../components/Footer/Footer'

const Welcome = () => {
    return (
        <div>
            <HeroSection />
            <WhyUs />
            <Clients />
            <Dummy />
            <Footer />
        </div>
    )
}

export default Welcome
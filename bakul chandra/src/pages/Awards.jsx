import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import CareerTimeline from '../component/AwardSection.sjsx/CareerTimeline'
import FinalCTA from '../component/AwardSection.sjsx/FinalCTA'

export default function Awards() {
    return (
        <div className="min-h-screen bg-black text-white font-lato">
            <PageHeroSection
                image="/award/award-hero.jpeg"
                mobileImage="/award/award-hero-mobile.jpeg"
                title="Awards & Recognition"
                clastyle="grayscale-75 object-top"
            />
            <CareerTimeline />
            {/* <FinalCTA /> */}
        </div>
    )
}

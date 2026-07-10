import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import CareerTimeline from '../component/AwardSection.sjsx/CareerTimeline'
import FinalCTA from '../component/AwardSection.sjsx/FinalCTA'
import TravelGallery from '../component/Travel/TravelGallery'

export default function Travel() {
    return (
        <div className="min-h-screen bg-black text-white font-lato">
            <PageHeroSection
                image="/award/award-hero.png"
                title="Travel & Photography"
                clastyle="grayscale-75 object-top "
            />
            <TravelGallery />
        </div>
    )
}

import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import CareerTimeline from '../component/AwardSection.sjsx/CareerTimeline'
import FinalCTA from '../component/AwardSection.sjsx/FinalCTA'
import TravelGallery from '../component/Travel/TravelGallery'

export default function Travel() {
    return (
        <div className="min-h-screen bg-black text-white font-lato">
            <PageHeroSection
                image="/travel/travel-11.jpg"
                title="Travel and Photography"
                clastyle="object-center"
            />
            <TravelGallery />
        </div>
    )
}

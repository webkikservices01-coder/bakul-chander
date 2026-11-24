import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import CareerTimeline from '../component/Career/CareerAchievements'
import FinalCTA from '../component/AwardSection.sjsx/FinalCTA'

export default function Career() {
    return (
        <div className="min-h-screen bg-black text-white font-lato">
            <PageHeroSection
                image="/about/about-hero.jpeg"
                title="Academic and Career Progression"
                clastyle="grayscale-75 object-top "
            />
            <CareerTimeline />
        </div>
    )
}

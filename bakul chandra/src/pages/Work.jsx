import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import SkillsSection from '../component/WorkSections/SkillsSection'
import MyWorkGrid from '../component/WorkSections/MyWorkGrid'
function Work() {
    return (
        <div className="min-h-screen bg-black text-white font-lato">
            <PageHeroSection
                image="/work/work-hero.png"
                title="My Work Portfolio"
                clastyle="grayscale-75 object-top "
            />
            <SkillsSection />
            <MyWorkGrid />
        </div>
    )
}

export default Work

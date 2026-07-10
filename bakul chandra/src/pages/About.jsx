import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import WhoIAm from '../component/AboutSections/WhoIAm'
import MyVision from '../component/AboutSections/MyVision'
import SketchToMasterpiece from '../component/AboutSections/SketchToMasterpiece'
import PortfolioSection from '../component/HomeSections/PortfolioSection'
// import BiographyPage from '../component/AboutSections/BiographyPage'
function About() {
    return (
        <div className="min-h-screen bg-black text-white font-lato">
            <PageHeroSection
                image="/about/about-hero.jpeg"
                title="Biography"
                clastyle="grayscale-75"
            />
            <WhoIAm />
            <MyVision />
            {/* <BiographyPage /> */}
            {/* <SketchToMasterpiece /> */}
            {/* <PortfolioSection /> */}
        </div>
    )
}

export default About

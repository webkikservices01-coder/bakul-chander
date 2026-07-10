import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import ArticlesSection from '../component/ThoughtsSections/ArticlesSection'

function Thoughts() {
    return (
        <div>
            <PageHeroSection
                image="/media/media-hero.jpeg"
                mobileImage="/media/media-hero-mobile.jpeg"
                title="Thoughts in Prose"
                clastyle="grayscale-75 object-top "
            />
            <ArticlesSection />
        </div>
    )
}

export default Thoughts
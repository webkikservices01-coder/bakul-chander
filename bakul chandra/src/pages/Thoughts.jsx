import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import ArticlesSection from '../component/ThoughtsSections/ArticlesSection'

function Thoughts() {
    return (
        <div>
            <PageHeroSection
                image="/bakul.jpeg"
                title="Thoughts in Prose"
                clastyle="grayscale-75 object-[center_15%]"
            />
            <ArticlesSection />
        </div>
    )
}

export default Thoughts
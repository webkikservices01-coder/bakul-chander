import React from 'react'
import PageHeroSection from '../component/PageHeroSection'
import MediaBody from '../component/MediaSections/MediaBody'

function Media() {
    return (
        <div>
            <PageHeroSection
                image="/6.jpeg"
                title="Media"
                clastyle="grayscale-75 object-top"
            />
            <MediaBody />
            
        </div>
    )
}

export default Media
import React from 'react'
import UpperAboutPagePic from './UpperAboutPagePic'
import '../styles/AboutPageStyles.css'
import AboutMidPage from './AboutMidPage'

export default function About() {
    return (
        <div className="aboutPageMainDiv">
            <UpperAboutPagePic/>
            <AboutMidPage/>
        </div>
    )
}

import React from 'react'

import { GiRibbonMedal, GiDiploma, GiMedalSkull } from 'react-icons/gi'
const About = () => {
  return (
    <>
      <h2 className="mt-16 mb-4 text-4xl text-white">Personal achievements</h2>
      <div className="flex items-center justify-between">
        <div
          className="h-full w-96 rounded-xl text-white"
          style={{ backgroundColor: '#2E0348' }}
        >
          <h3 className="flex  items-center justify-center py-4 text-2xl">
            Hackathon <GiMedalSkull />
          </h3>
          <p className="flex items-center justify-center pb-4">
            Ogogo academy hackathon winner on UI/UX design
          </p>
        </div>
        <div
          className="h-full w-96 rounded-xl text-white"
          style={{ backgroundColor: '#2E0348' }}
        >
          <h3 className="flex  items-center justify-center py-4 text-2xl">
            Olympiad <GiRibbonMedal />
          </h3>
          <p className="flex items-center justify-center pb-4">
            1st place in the Olympiad in Informatics
          </p>
        </div>
        <div
          className="h-full w-96 rounded-xl text-white"
          style={{ backgroundColor: '#2E0348' }}
        >
          <h3 className="flex  items-center justify-center py-4 text-2xl">
            Сourses <GiDiploma />
          </h3>
          <p className="flex items-center justify-center pb-4">
            completed UI/UX design courses at ogogo academy
          </p>
        </div>
      </div>
    </>
  )
}

export default About

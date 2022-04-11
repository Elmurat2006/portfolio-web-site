import React from 'react'

import {GiRibbonMedal,GiDiploma,GiMedalSkull} from 'react-icons/gi'
const About = () => {
  return (
    <>
    <h2 className="text-white text-4xl mt-16 mb-4">
    Personal achievements
  </h2>
      <div className="flex justify-between items-center">
   
      <div className="w-96 h-full text-white rounded-xl" style = {{backgroundColor: '#2E0348'}}>
        <h3 className="py-4  flex justify-center items-center text-2xl">Hackathon <BiMedal /></h3>
        <p className="flex pb-4 justify-center items-center">Ogogo academy hackathon winner on UI/UX design</p>
      </div>
      <div className="w-96 h-full text-white rounded-xl" style = {{backgroundColor: '#2E0348'}}>
        <h3 className="py-4  flex justify-center items-center text-2xl">Olympiad <GiRibbonMedal /></h3>
        <p className="flex pb-4 justify-center items-center">1st place in the Olympiad in Informatics</p>
      </div>
      <div className="w-96 h-full text-white rounded-xl" style = {{backgroundColor: '#2E0348'}}>
        <h3 className="py-4  flex justify-center items-center text-2xl">Сourses  <GiDiploma /></h3>
        <p className="flex pb-4 justify-center items-center">completed UI/UX design courses at ogogo academy</p>
      </div>
    </div>
    </>
  )
}

export default About

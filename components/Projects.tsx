import React from 'react'
import Card from './Card'
import { projects } from '../constants/constants'
import { ICard } from '../Types/ICard'

const itemsCart: ICard[] = [
  {
    title: 'Marvel Web Application',
    image:
      'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'React,Redux',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id: 1,
  },
  {
    title: 'Opensea-Blockhain-Clone',
    image:
      'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'Next,Tailwind,Sanity',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id: 2,
  },
  {
    title: 'React Pizza',
    image:
      'https://camo.githubusercontent.com/4cedcfc0d2deed6ac298d9454dac617a8cbcec25b1ad3070fb24ebf0106b587d/68747470733a2f2f696d6775722e636f6d2f633237754663392e6a7067',
    tags: 'React,Redux',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id: 3,
  },
  {
    title: 'Metaverse',
    image:
      'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'Figma',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id: 5,
  },
  {
    title: 'Thynk Travel',
    image:
      'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'Figma',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id: 6,
  },
]

const Projects = () => {
  return (
    <>
      <h2 className="mt-48 text-4xl text-white  mb-20">Projects</h2>
    <div className = "mx container-auto flex justify-between text-white flex-wrap">
      <Card />
    </div>
    </>
  )
}

export default Projects

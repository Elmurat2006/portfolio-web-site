import React from 'react'
import {ICard} from '../Types/ICard'

import globalTypes from '../global-types'
const itemsCart:ICard[] = [
  {
    title: 'Marvel Web Application',
    image: 'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'React,Redux',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id : 1,
  },
  {
    title: 'Opensea-Blockhain-Clone',
    image: 'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'Next,Tailwind,Sanity',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id : 2,
  },
  {
    title: 'React Pizza',
    image: 'https://camo.githubusercontent.com/4cedcfc0d2deed6ac298d9454dac617a8cbcec25b1ad3070fb24ebf0106b587d/68747470733a2f2f696d6775722e636f6d2f633237754663392e6a7067',
    tags: 'React,Redux',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id : 3,
  },
  {
    title: 'Metaverse',
    image: 'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'Figma',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id : 5,
  },
  {
    title: 'Thynk Travel',
    image: 'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg',
    tags: 'Figma',
    description: 'lorem',
    source: 'fkewokofw',
    visit: 'kfpwepkfkpw',
    id : 6,
  },
]


const Card= () => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://i.ibb.co/QfZj8J3/2022-04-06-18-01-26.png"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Thynk Travel</div>
      <p className="text-gray-400 text-base">
Thynk travel is a company that makes tours and sends people anywhere.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Figma
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #UX
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #UI
      </span>
    </div>
  </div>



  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://i.ibb.co/6JGgGbz/2022-04-06-17-58-43.png"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Metaverse</div>
      <p className="text-gray-400 text-base">
      The metaverse project is a project that I did for myself
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Figma
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #UX
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #UI
      </span>
    </div>
  </div>


  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://i.ibb.co/dk6LL99/2022-04-07-12-29-01.png"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Marvel Information Portal</div>
      <p className="text-gray-400 text-base">
      Information portal for Marvel. This is a project where I used technologies like React and more.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #React
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #API
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Router
      </span>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://i.ibb.co/G0tXjYy/2022-04-07-12-33-32.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Opensea clone</div>
      <p className="text-gray-400 text-base">
      opensea clone project. This project in which you can upload your nft in it I used Sanity
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Next
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Sanity
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Tailwind
      </span>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://i.ibb.co/jzm3VdL/2022-04-07-12-36-50.png"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Alcha home</div>
      <p className="text-gray-400 text-base">
      this project is made for one company.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #HTML
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #CSS
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #JS
      </span>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://i.ibb.co/fD3r4Dw/2022-04-07-12-43-06-2.png"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Pizza</div>
      <p className="text-gray-400 text-base">    
      This is a pizza project. I did this project for my portfolio
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #React
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #Redux
      </span>
    </div>
  </div>


  </>
  
  )
}

export default Card
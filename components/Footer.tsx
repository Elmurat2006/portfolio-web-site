import React from 'react'
import { AiFillGithub, AiFillBehanceCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className=" mt-16">
      <div
        className=" py-6 px-4 md:flex md:items-center md:justify-between"
        style={{
          background:
            'linearGradient(90deg, rgba(53,1,82,1) 0%, rgba(165,80,232,1) 43%, rgba(15,1,43,1) 100%)',
        }}
      >
        <span className="text-gray-300 sm:text-center text-2xl">
          © 2022 <a href="https://flowbite.com">Elmurat</a>. Portfolio web site
        </span>
        <div className="mt-4 flex space-x-6 sm:justify-center md:mt-0">
          <a href="https://github.com/Elmurat2006" className="text-gray-400 text-4xl hover:text-white">
            <AiFillGithub />
          </a>
          <a href="https://www.behance.net/elmuratnagaev" className="text-gray-400 text-4xl hover:text-white">
            <AiFillBehanceCircle />
          </a>
          <a href="https://t.me/Nagaev_01" className="text-gray-400 hover:text-white text-4xl">
            <BsTelegram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

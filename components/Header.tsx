import React from 'react'
import { AiFillGithub, AiFillBehanceCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
const Header = () => {
  return (
    <div>
      <nav
        className="pin-t fixed z-10 flex w-full flex-wrap items-center justify-between overflow-hidden p-6 text-white"
        style={{ marginTop: '-100px' }}
      >
        <div className="flex-no-shrink mr-6 flex items-center text-white">
          <a
            className="text-white no-underline hover:text-white hover:no-underline"
            href="#"
          >
            <span className="pl-2 text-2xl">
              <i className="em em-grinning" />
              ELMURAT
            </span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="text-grey border-grey-dark  flex items-center rounded border px-3 py-2 hover:border-white hover:text-white"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full flex-grow pt-6 lg:block lg:flex lg:w-auto lg:items-center lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset flex-1 items-center justify-end lg:flex">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4  text-2xl text-white no-underline"
                href="https://github.com/Elmurat2006"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="mr-3">
              <a
                className="text-grey-dark hover:text-grey-lighter hover:text-underline inline-block py-2 px-4 text-2xl no-underline"
                href="https://www.behance.net/elmuratnagaev"
              >
                <AiFillBehanceCircle />
              </a>
            </li>
            <li className="mr-3">
              <a
                className="text-grey-dark hover:text-grey-lighter hover:text-underline inline-block py-2 px-4 text-2xl no-underline"
                href="https://t.me/Nagaev_01"
              >
                <BsTelegram />
              </a>
            </li>
            <li className="mr-3"></li>
          </ul>
        </div>
      </nav>
      {/*Container*/}
      <div className="md:mt-18 container mx-auto mt-24 bg-white shadow-lg"></div>
    </div>
  )
}

export default Header

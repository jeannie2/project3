import React, { useState } from 'react'
import { NavLink } from 'react-router-dom' // useNavigate,
// import { NavLink } from 'react-router-dom' // Link

// import useAuth from '@/hooks/useAuth'

function LayoutsNavbar() {
  // const { data, apiLogout } = useAuth()

  // const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black text-white font-[arial]">
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="text-sm lg:flex-grow">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-5xl tracking-tight font-[arial-black] mx-auto">FBI</span>
          </div>
          <NavLink to="/wanted/topten" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            Ten Most Wanted
          </NavLink>
          <NavLink to="/wanted/cei" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            CEI
          </NavLink>
          <NavLink to="/wanted/counterintelligence" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            Counterintelligence
          </NavLink>
          <NavLink to="/wanted/cyber" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            Cyber
          </NavLink>
          <NavLink to="/wanted/kidnapmissing" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            Kidnappings & Missing Persons
          </NavLink>
          <NavLink to="/wanted/seekinginfo" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            Seeking Information
          </NavLink>
          <NavLink to="/wanted/additional" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 rounded py-1 px-2">
            Additional violent crimes
          </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default LayoutsNavbar

/*   <button type="button" onClick={() => navigate('search')} className="float-right border border-white bg-black hover:bg-gray-500 text-white font-bold block mt-5 lg:inline-block lg:mt-0 text-black-200 mr-4 px-2 py-1 rounded"><i className="fa fa-search" /> Search</button> */

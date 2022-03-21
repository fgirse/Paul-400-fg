/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from '../data/SvgLogoNeu'
import Modal6 from './Modal6.js'

function Infosection() {
  return (
    <>
      <section className="w-screen mx-auto bg-transparent h-full lg:flex lg:flex-col md:bg-amber-800 lg:py-2 lg:mx-auto lg:gap-x-5 lg:justify-start lg:w-screen lg:items-start xl:flex-row xl:justify-center xl:items-center">
        <div className="mx-auto w-full flex flex-col items-center md:flex-row md:items-stretch md:justify-start md:gap-x-5">
          <div className="flex flex-col items-center justify-center w-96">
            <LogoNeu className="mx-auto p-1 w-24 h-12 lg:w-40 lg:h-16"></LogoNeu>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-2">
          <svg className="w-6 h-6" fill="none" stroke="#fff200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">
              0761 38386747
            </p>
          </div>

         
          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
          <svg className="w-6 h-6" fill="#fff200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">
              rettungsanker-freiburg@gmx.de
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:mr-10">
          <div>
            <button className='lg:h-12 lg:w-48 rounded-2xl lg:text-lg text-slate-100 bg-amber-600 lg:hover:bg-amber-500'><svg className="inline w-10 h-10 px-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
            Rettungsanker-Bloq</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Infosection
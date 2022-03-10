/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from '../data/SvgLogoNeu'
import Modal6 from './Modal6.js'

function Infosection() {
  return (
    <>
      <section className="bg-slate-900 h-24 md:flex md:flex-row md:bg-amber-800 md:py-2 md:mx-auto md:justify-start md:w-full items-center">
        <div className=" w-full flex flex-col md:flex-row md:items-stretch md:justify-start md:gap-x-5">
          <div className=" mt-4 flex flex-col items-center justify-center w-96">
            <LogoNeu width="123" height=""></LogoNeu>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-2">
          <svg class="w-6 h-6" fill="none" stroke="#fff200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <p className="font-sans font-bold text-lg text-gray-100 md:text-sm lg:text-lg xl:text-ig ">
              0761 38386747
            </p>
          </div>

         
          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
          <svg className="w-6 h-6" fill="#fff200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <p className=" font-sans font-bold text-lg  text-gray-100 md:text-sm lg:text-xl xl:text-lg">
              rettungsanker-freiburg@gmx.de
            </p>
          </div>
        </div>

        <div className="hidden md:block md:mr-10">
          <div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Infosection                                                                           
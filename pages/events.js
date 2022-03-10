import React from 'react'
import Image from 'next/image'
import Modal5 from '../components/Modal5.js'
import * as Icons from "heroicons-react";

import Saxophone from '../components/icons/svg/SVGSaxophoneWeiss'

export default function event() {
  return (
    <>
      <section className="mx-auto mb-8 px-2 py-3 w-11/12 bg-slate-700 md:px-0 rounded-2xl">
        
        <div className="container -mt-32 rounded-2xl h-11/12 bg-yellow-200/10 items-center max-w-7xl px-8 mx-auto lg:mt-0 xl:px-5">
          <p className="mt-16 headingB py-4 text-center text-gray-100 sm:text-6xl md:text-5xl lg:mt-5 lg:text-8xl lg:py-8 ">
            Dein Event
          </p>
          <div className="mx-auto w-10/12 sm:w-5/12 md:w-2/12  lg:w-4/12 lg:-mt-8 xl:w-3/12">
            <Image
              src="/LogoAlt.png"
              layout="responsive"
              alt="Logo-alt "
              width="1049"
              height="230"
            />
          </div>
          
          

          <div className="-mt-20 flex flex-wrap items-center sm:-mx-3 lg:mt-24">
            <div className=" lg:-mt-[30vh] w-full h-full order-last md:w-1/2 md:px-3 sm:order-first">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="mt:24 lg:mt-36 text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  <span className="block xl:inline">
                    privater oder business Anlass? <br />
                  </span>
                  Dein Event
                  <span className="block text-orange-600 xl:inline"> ! </span>
                </h1>
                <p className="mx-auto text-base text-gray-400 sm:max-w-md md:max-w-3xl lg:max-w-lg lg:text-xl 1xl:text-2xl">
                  Wir planen gerne für Sie Ihren persönlichen Event - auf Wunsch
                  Catering vollumfänglich möglich{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  <span className="text-bold text-yellow-600">
                    <a href>weitere Infos</a>
                  </span>
                  Sprechen Sie uns an oder kontaktieren Sie uns per mail
                </p>
                <div className="p-6 relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    className="text-xs  text-center flex items-center w-full px-6 py-o mb-3 lg:text-3xl text-white bg-yellow-600 rounded-md sm:mb-0 hover:bg-yellow-400 sm:w-auto"
                  >
                    email Rettungsanker
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#494949"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <Modal5 className="mb-12"></Modal5>
                </div>
              </div>
            </div>
            <div className=" -mt-[6vh] w-full sm:mt-0 md:w-1/2 ">
              <div className="mt-36 w-8/12 h-auto ml-16 overflow-hidden rounded-md shadow-xl sm:rounded-xl lg:-mt-[30vh]">
                <Image
                  src="/Women_Illustration_adobespark.png"
                  alt=""
                  height="900"
                  width="955"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

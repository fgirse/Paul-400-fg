/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import Astra from "../components/icons/svg/SVGAstra"
import Ganter from "../components/icons/svg/SVGGanter"
import Flens from "../components/icons/svg/SVGFlensburger"
import Logo from '../components/icons/svg/SvgLogoNeu'

function drinks() {  
  return (
  <>
 <div className="mt-2 p-4 flex flex-col items-center justify-center bg-slate-800 text-slate-300 ">
 <div>
              <Logo className="w-60 h-60"></Logo>
       </div>     
         <p className="text-7xl text-slate-100 headingB">Drinks & Snacks</p>
             
 <main className="flex-1 mt-12 w-9/12 mx-auto p-24 flex flex-col items-center justify-center rounded-2xl bg-slate-800">
<div className="headingD text-7xl text-center font-extrabold text-white">Biere </div>
<hr className="hr mb-5 w-full headingD text-xl text-white"/>

 <section className=" max-w-7xl px-4 py-25 mx-auto text-left md:text-center bg-white-100">

  <div className="grid grid-cols-1 gap-36 md:grid-cols-2 items-center">
    <div className="flex flex-col items-center">
  <Ganter className="w-24 h-24 mb-5"></Ganter>
  <hr className="w-full text-slate-900 mb-3"/>

         <p className="mb-1 text-sm font-bold tracking-wide text-gray-500 uppercase">3.90 Euro</p>
      <h1 className="mb-2 text-4xl font-bold leading-tight text-gray-300 md:font-extrabold">Ganter Pils<span className="text-2xl font-medium text-gray-200"> offen o.33 l</span></h1>
      <p className="mb-6 text-lg text-gray-200">köstliches Ganter Bräu frisch vom Fass</p>
      </div>
    <div className="flex flex-col items-center">
  <Astra className="w-24 h-24 mb-5"></Astra>
  <hr className="w-full text-slate-900 mb-3"/>

         <p className="mb-1 text-sm font-bold tracking-wide text-gray-500 uppercase">3.90 Euro</p>
      <h1 className="mb-2 text-4xl font-bold leading-tight text-gray-300 md:font-extrabold">Astra Bier<span className="text-2xl font-medium text-gray-200"> Flasche o.33 l</span></h1>
      <p className="mb-6 text-lg text-gray-200">natürlich direkt vom Kiez</p>
      </div>
  </div>
</section>
<section className="max-w-7xl px-4 py-24 mx-auto text-left md:text-center bg-white-100">

  <div className="grid grid-cols-1 gap-36 md:grid-cols-2 items-center">
    <div className="flex flex-col items-center">
  <Flens className="w-24 h-24 mb-5"></Flens>
  <hr className="w-full text-slate-900 mb-3"/>

         <p className="mb-1 text-sm font-bold tracking-wide text-gray-500 uppercase">3.90 Euro</p>
      <h1 className="mb-2 text-4xl font-bold leading-tight text-gray-300 md:font-extrabold">Flensburger<span className="text-2xl font-medium text-gray-200"> Flasche o.33 l</span></h1>
      <p className="mb-6 text-lg text-gray-200">das herbe Blonde von der Waterkant</p>
      </div>
    <div className="flex flex-col items-center">
  <Ganter className="w-24 h-24 mb-5"></Ganter>
  <hr className="w-full text-slate-900 mb-3"/>

         <p className="mb-1 text-sm font-bold tracking-wide text-gray-500 uppercase">4.90 Euro</p>
      <h1 className="mb-2 text-4xl font-bold leading-tight text-gray-300 md:font-extrabold">Hefe-Weizen<span className="text-2xl font-medium text-gray-200">Flasche o.5 l</span></h1>
      <p className="mb-6 text-lg text-gray-200">prickelnde Erfrischung aus dem Ganter Brauhaus</p>
      </div>
  </div>
</section>


 </main>
</div>

</>
   
  )
}



export default drinks;

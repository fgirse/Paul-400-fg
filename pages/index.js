/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import ReactDOM from "react-dom";
import { PageSEO } from '@/components/SEO'
import Arena from '../components/icons/svg/SVGArena'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Modal6 from '../components/Modal6'
import * as Icons from 'heroicons-react'
import Flensburger from "../components/icons/svg/SVGFlensburger";
import Ganter from "../components/icons/svg/SVGGanter";
import Astra from "../components/icons/svg/SVGAstra";
import Astraflasche from"/components/icons/svg/SVGAstraflasche";
import Skyline from "../components/icons/svg/SVGSkyline_weiss_3.js";
import SCLogo from "../components/icons/svg/SCLogo";
import FlensDose from '../components/icons/svg/SVGFlensdose';
import LogoNeu from '../components/icons/svg/SvgLogoNeu'
import Image from "next/image";
import sketchy from "theme-ui-sketchy-preset";
import SwiperAutoplay from "../components/Slider/Swiper";
import NewsletterForm from '@/components/NewsletterForm'

import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S,
} from "theme-ui";

const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
};


const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const SLIDE_COUNT = 7;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home({ posts }) {

return(
<>

<section className="mt-5 mx-auto flex-grow-1 border-t-4 border-b-4 border-amber-400 bg-[url('/Hero4.png')] w-full h-[calc(100vh-36vh)] bg-contain bg-center md:bg-[url('/Hero.png')] md:bg-cover bg-no-repeat md:w-[100vw] md:h-[calc(100vh-12vh-16vh)]">

</section>
  <section className="hidden lg:block lg:mx-auto lg:mt-2 lg:rounded-3xl lg:w-screen bg-slate-900 lg:h-[14vh] ">
          <div className="grid grid-cols-1 md:grid md:grid-cols-[7fr_6fr]  items-center justify-center">
                <div className="">
                        <h1 className=" ml-4 headingB text--600 lg:text-base xl:text-1xl px-4 2xl:text-[3.33rem] font-black">
                          Dein Treffpunkt in Freiburg!</h1>
                </div>
                <div className="">
                <Skyline width="100%" height="8vh" />
              </div>
          </div>

</section>
          {/*======================================================================= SECTION A ===========================================================*/}

          <section className="mx-auto mt-[3vh] w-full md:-mt-[13vh] lg:mt-[3vh]">
            <div className=" lg:content-stretch mx-auto  grid h-96 w-11/12 grid-cols-1 lg:grid lg:grid-cols-[1fr_2fr] lg:justify-between lg:gap-x-6">
              <div className=" h-36 w-full py-2">
                <p className="mb-2 text-center text-3xl font-bold uppercase tracking-tight text-yellow-500 dark:text-white md:text-4xl xl:text-5xl">
                  öfffnungzeiten
                </p>
                <p className="sm:text-1xl mt-2 text-center text-sm text-gray-300 md:text-base lg:text-xl">
                  Montag-Donnerstag: 18 bis 24 Uhr
                </p>
                <p
                  className="sm:text-1xl xl:text-
                 text-center text-sm  text-gray-300 md:text-base lg:text-xl"
                >
                  Freitag und Samstag: 15 bis 03 Uhr
                </p>
                <p className="sm:text-1xl xl:text- text-center text-base  text-gray-300 md:text-base lg:text-xl">
                  Sonntag: Ruhetag
                </p>
              </div>
              {/*================================================ Modale6 =======================================================================================*/}
              <div className="mx-auto mt-12 h-28 w-11/12 rounded-2xl bg-orange-600 px-8 text-4xl hover:bg-slate-500 md:hidden">
                <Modal6 className="mt-3"></Modal6>
              </div>
              {/*=============n=================================== Modale6 ende =======================================================================================*/}

              <div className="-gray-700 mx-auto mt-5 bg-gray-700 shadow-lg shadow-yellow-400/50 flex w-11/12 flex-col items-center rounded-2xl border md:bg-red-900 dark:bg-gray-800 md:flex-row lg:w-11/12 ">
                <img className="p-3" src="/portrait-mick1.png" alt="portrait" />
                <div className="flex w-full flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-5 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white xl:text-5xl">
                    "Moin Moin"
                  </h5>
                  <p className="md:newspaperA text- mb-1 font-normal text-gray-100 dark:text-gray-400">
                    In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von
                    Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites
                    Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt
                    gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Wir sind stolz auf
                    unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale
                    Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen
                    Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email.
                    Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br />
                    <br />
                    Michael Schreck und das Team des Rettungsankers
                  </p>
                </div>
              </div>
            </div>

            <div className=" left-16 mx-auto mt-[150vh] flex w-full flex-col items-start justify-start px-12 md:absolute md:-mt-40 md:w-4/12">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-sans text-xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-4xl lg:mb-6"
              >
                <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?Subject=Enquiry">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>
                  SOS Rettungsanker
                </a>
              </button>
              <div className=''>
              <p className="mt-12 relative z-30 text-justify text-sm text-white">
                Schreiben Sie uns gerne Ihre Eindrücke zu Ihrem Besuch im Rettungsanker. Am
                wichtigsten aber: geben Sie uns Reflexion, wenn etwas nicht zu Ihrer Zufriedenheit
                vorgefallen ist! Nur so können wir uns als Ihr Gastgeber stetig verbessern und Ihnen
                als Gast zukünftig noch besser gerechtwerden.
              </p>
              </div>
                 </div>
          </section>

          {/*========================== ENDE SECTION A =================================================*/}

           <div className="mt-15 flex flex-col md:flex md:flex-row items-baseline">
            <div className="w-4/12 absolute left-32 transform translate-y-36 md:relative md:transform md:-translate-y-10 md:w-3/12 xl:w-2/12 xl:transform: xl:-translate-y-48">
              <Image
                src="/lighthousebw.svg"
                
                alt="illustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
            <div className=" w-4/12  left-36 p-2 transform translate-y-[68vh] sm:transform sm:-translate-y-6 md:static md:py-0 md:w-8/12 md:right-16 lg:w-3/12 xl:w-3/12 float-right md:transform md:translate-y-0 xl:transforn xl:-translate-y-[5vh]">
              <Image
                className=""
                src="/Astraballons.png"
                alt="astraballons"
                layout="responsive" 
                height={2764}
                width={1739}
              />
            </div>
          <div className=" -order-1 right-5 absolute transform translate-y-60 md:transform:-md:translate-y-6 lg:w-3/12 xl:transform xl:translate-y-[14vh]">
              <Image
                src="/rettungsring.png"
                alt="illustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
            <div className="hidden md:block transform -translate-y-12 right w-5/12  md:transform:-translate-y-24 lg:transform lg:w-3/12 lg:-transform: lg:-translate-y-24">
              <Image
                src="/Graffity_StPauli.png"
                alt="llustration"
                layout="responsive"
                height={224}
                width={224}
              />
            </div>
          </div>

          {/*======================================= Section B =======================================================================*/}
          <section className="mt[12vh] xl:-mt-48 xl:p-12">
            <div className="grid overflow-hidden grid-cols-1 md:grid md:grid-cols-3 grid-rows-2 gap-3">
              <div className="relative z-40 mx-auto w-10/12 md:w-11/12">
                <Image
                  className='relative z-40'
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
            </div>
          </section>

          {/*======================================= Ende Section B =======================================================================*/}

          <h1 className="mt-10 headingA relative left-1 text-[3rem] text-yellow-500 text-center md:text-8xl lg:text-[10rem] xl:-mt-[68vh]">
            Die Kneipe
          </h1>

          {/*========================================================== section E ===============================================================*/}

          <section className=" xl:mt-[12vh]">
            <div className="container mx-auto rounded-2xl bg-slate-800 w-11/12">
              <p className=" text-lsm font-sans text-justify lg:newspaperB lg:mt-0 text-gray-100  text-lg px-4 lg:-mb-16 lg:text-3xl lg:leading-10">
                Gemütlich nordisches Ambiente im Herzen der Altstadt Freiburgs
                gelegen. Orginales Waterkant-Feeling mit Astra <Astraflasche className="hidden md:inline w-20 h-16"></Astraflasche>, Flens & Co. <FlensDose className="hidden md:inline w-20 h-12"></FlensDose><br/>
                Jeden Samstag Bundesliga Saison Spieltag des <SCLogo className="inline h-10 w-36"/> Live in unserer <Link href="/sportareNa">
                  <a className="text-yellow-600 hover:text-amber-300 hover:border-b-4 hover:border-slate-400 text-sm lg:text-4xl">
                    Sportarena.
                  </a>
                </Link>{" "}
                <Arena className="inline" height="70" width="90"></Arena> Bei
                Top Spielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser
                Booking-Tool zu empfehlen !!!
              </p>
            </div>

            <ThemeProvider theme={theme}>
              <div className="-mt-1 mx-auto p-16 lg:mt-20 lg:w-11/12 lg:max-w-8xl grid grid-cols-1 justify-center items-center md:p-6  md:grid-cols-3 md:justify-around lg:item11s-center lg:gap-x-5">
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Astra
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Astra>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Astra Bier
                    </p>
                    <p className="text-xl text-center">
                      natürlich direkt vom Kiez in den Anker
                    </p>
                  </Text>
                </Card>

                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Ganter
                      aobject-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Ganter>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Ganter Bier
                    </p>                                                                                                                                                                                                                                                                                                                                         z
                    <p className="text-xl text-center">
                      frisches köstliches Ganter-Bräu vom Fass
                    </p>
                  </Text>
                </Card>
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Flensburger
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Flensburger>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Flensburger
                    </p>
                    <p className="text-xl text-center">
                      das blonde Herbe aus dem hohen Norden
                    </p>
                  </Text>
                </Card>
              </div>
            </ThemeProvider>
          </section>
          {/*========================================================== section E =ende ==============================================================*/}
          <h1 className="z-20 relative headingB text-[2rem] text-center text-gray-50 lg:headingA lg:text-yellow-500 lg:text-[4.66rem] lg:mt-20">
            Impressionen Rettungsanker
          </h1>
          <div className="relative z-30 w-6/12 lg:w-3/12 lg:p-8 lg:transform lg:-translate-y-16 xl:transform xl-translate-y-16">
            <Image
              src="/Albers_Illu_white.png"
              alt="Impressionen"
              height="208 "
              width="195"
              layout="responsive"
            />
          </div>
          {/*========================================================== section F ==============================================================*/}
          
            
                      <section className="  md:-mt-72 mx-auto">
                        <div className="mx-auto border-8 w-[66.66vw] h-[36.66vh]">
                        <SwiperAutoplay></SwiperAutoplay>
                        </div>
                        <p className="mt-2 text-xs text-white text-center lg:text-lg">Impressionen aus dem Rettungsanker</p>

                      </section>
            
          
          {/*========================================================== section F ende==============================================================*/}

          {/*========================================================== section G =================================================*/}
          <section className="flex flex-col items-center">
            <div>
              <hr className="w-48 mt-12 mx-auto md:w-9/12" />

              <div className="w-36 mt-6 md:mt-20 mx-auto md:w-2/12 lg:m">
                <LogoNeu className="w-48 h-48 lg:w-60 lg:h-60"></LogoNeu>
                  
              </div>

              <h1 className="headingB text-white mt-2 text-[3rem] text-center lg:headingA lg:text-[6rem] lg:text-gray-600">
                Impressum
              </h1>
              <div>
                <div className="mt-8 flex flex-col items-center justify-between">
                  <h1 className="mx-auto w-9/12 md:text-4xl text-gray-100 text-center">
                    Rettungsanker Freiburg GbR
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Adelhauserstrasse 7c
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    79098 Freiburg / Breisgau
                  </h1>
                </div>

                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Geschäftsführung:
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Michael Schreck
                  </h1>
                </div>

                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Steuernummer:
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    1234567890
                  </h1>
                </div>
                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Gerichtsstand:
                  </h1>
                  <h1 className="mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Freiburg/ Breisgau
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/*======================================= Ende Section B =======================================================================*/}


</>
)
}

      {/*======================================================================= SECTION A ende ===========================================================*/}
    



    {/*======================================================================= SECTION A ===========================================================*/}












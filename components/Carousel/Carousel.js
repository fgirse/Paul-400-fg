/* eslint-disable prettier/prettier */
import styles from "../Carousel/carousel.module.css";
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/hero.png",
    "/Slide001.png",
    "/Impress03.jpg",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className="bg-slate-700 h-[50vh] relative border rounded-2xl overflow-hidden w-full mx-auto md:h-[calc(100vh-166px)] ">
      <div className="z-10 cursor-pointer absolute w-[10%] h-[20%] left-0 bottom-0" onClick={()=>handleArrow("l")}>
        <Image src="/arrow-links.svg" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className="flex fle-row w-[300vw] h-[100%]" style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className="relative w-[100vw] h-[100%]" key={i}>
            <Image src={img} alt="" layout="responsive" height="200" width="300" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className="z-10 cursor-pointer absolute w-[10%] h-[20%] right-0 bottom-0" onClick={()=>handleArrow("r")}>
        <Image src="/arrow-rechts.svg" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Carousel;
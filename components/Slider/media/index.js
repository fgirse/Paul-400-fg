/* eslint-disable prettier/prettier */
import media1 from "./Impress01.jpg";
import media2 from "./Impress02.jpg";
import media3 from "./Impress03.jpg";
import media4 from "./Impress04.jpg";
import media5 from "./Impress05.jpg";
import media6 from "./Impress06.jpg";


export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByIndex = index => media[index % media.length];
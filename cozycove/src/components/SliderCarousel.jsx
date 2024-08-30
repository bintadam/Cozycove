import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineVilla } from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { GiCaveEntrance } from "react-icons/gi";
import { TbBeachOff } from "react-icons/tb";
import { MdCabin } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { TbUfo } from "react-icons/tb";
import { GiCastle } from "react-icons/gi";
import { IoSnowSharp } from "react-icons/io5";
import { GiCampingTent } from "react-icons/gi";
import { GiBowlingPin } from "react-icons/gi";
import { GiGrapes } from "react-icons/gi";
import { TbWaterpolo } from "react-icons/tb";
import { GiGolfFlag } from "react-icons/gi";
import { VscPiano } from "react-icons/vsc";
import { GiIsland } from "react-icons/gi";
import { GiModernCity } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { SiGitea } from "react-icons/si";
import { GiPalmTree } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineRoomService } from "react-icons/md";
import { RiTicket2Line } from "react-icons/ri";
import { CustomRightArrow, CustomLeftArrow } from './CustomArrows'

const responsive ={
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 10,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    slidesToSlide: 3
  }
};


export default function SliderCarousel() {
  return (
    <div className='font-base text-slate-600 text-xs mx-20 mt-4'>
      <Carousel 
        swipeable={true}
        draggable={true}
        responsive={responsive} 
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        itemClass="carousel-item-padding-40-px"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        >
        <div><RiTicket2Line size={24}/>Icons</div>
        <div><MdOutlineVilla size={28}/>Tiny homes</div>
        <div><LiaSwimmingPoolSolid size={28}/>Amazing pools</div>
        <div><MdOutlineRoomService size={28}/>Luxe</div>
        <div><GiCaveEntrance size={23}/>Caves</div>
        <div><TbBeachOff size={25}/>Beachfront</div>
        <div><MdCabin size={25}/>Cabins</div>
        <div><GiPalmTree size={25}/>Tropical</div>
        <div><BsFire size={24}/>Trending</div>
        <div><TbUfo size={25}/>OMG!</div>
        <div><GiCastle size={26}/>Castles</div>
        <div><FaSkiing size={25}/>Ski-in/out</div>
        <div><GiGrapes size={25}/>Vineyards</div>
        <div><SiGitea size={25}/>Bed & breakfasts</div>
        <div><GiCampingTent size={25}/>Camping</div>
        <div><TbWaterpolo size={32}/>Lake</div>
        <div><GiGolfFlag size={25}/>Golfing</div>
        <div><VscPiano size={23}/>Grand pianos</div>
        <div><GiIsland size={32}/>Islands</div>
        <div><GiModernCity size={25}/>Top cities</div>
        <div><GiBowlingPin size={25}/>Play</div>
        <div><IoSnowSharp size={25}/>Artic</div>
        <div><IoMdColorPalette size={25}/>Creative spaces</div>
      </Carousel>
    </div>
  )
}

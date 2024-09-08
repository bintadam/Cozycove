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
// import { CustomRightArrow, CustomLeftArrow } from './CustomArrows'

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
        // customRightArrow={<CustomRightArrow />}
        // customLeftArrow={<CustomLeftArrow />}
        >
        <div>
          <RiTicket2Line size={24}/>
          <span></span>Icons</div>
        <div>
          <MdOutlineVilla size={28} className='ml-4'/>
          <span></span>Tiny homes</div>
        <div>
          <LiaSwimmingPoolSolid size={28} className='ml-2'/>
          <span>Amazing pools</span>
        </div>
        <div>
          <MdOutlineRoomService size={28}/>
          <span>Luxe</span>
        </div>
        <div>
          <GiCaveEntrance size={23} className='ml-1'/>
          <span>Caves</span>
        </div>
        <div>
          <TbBeachOff size={25} className='ml-2'/>
          <span>Beachfront</span>
        </div>
        <div>
          <MdCabin size={25} className='ml-1'/>
          <span>Cabins</span>
        </div>
        <div>
          <GiPalmTree size={25} className='ml-4'/>
          <span>Tropical</span></div>
        <div>
          <BsFire size={24} className='ml-2'/>
          <span>Trending</span></div>
        <div>
          <TbUfo size={25}/>
          <span>OMG!</span>
        </div>
        <div>
          <GiCastle size={26} className='ml-2'/>
          <span>Castles</span></div>
        <div>
          <FaSkiing size={25} className='ml-3'/>
          <span>Ski-in/out</span>
        </div>
        <div>
          <GiGrapes size={25} className='ml-3'/><span>Vineyards</span></div>
        <div>
          <SiGitea size={25} className='ml-6'/><span>Bed & breakfasts</span></div>
        <div>
          <GiCampingTent size={25} className='ml-2'/><span>Camping</span></div>
        <div>
          <TbWaterpolo size={32} /><span>Lake</span></div>
        <div>
          <GiGolfFlag size={25} className='ml-2'/><span>Golfing</span></div>
        <div>
          <VscPiano size={23} className='ml-4'/><span>Grand pianos</span></div>
        <div>
          <GiIsland size={32} className='ml-1'/><span>Islands</span></div>
        <div>
          <GiModernCity size={25} className='ml-4'/><span>Top cities</span></div>
        <div>
          <GiBowlingPin size={25}/>
          <span>Play</span>
        </div>
        <div>
          <IoSnowSharp size={25}/>
          <span>Artic</span>
        </div>
        <div>
          <IoMdColorPalette size={25} className='ml-3'/>
          <span>Creative spaces</span>
        </div>
      </Carousel>
    </div>
  )
}

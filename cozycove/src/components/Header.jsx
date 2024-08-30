import logoImg from '../assets/logo.png'
import {useState} from 'react'
import { GoGlobe } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Search from './Search'
import Dropdown from './Dropdown';


export default function Header() {
  const [dropdown , setDropdown] = useState(false)

  return (
    <div>
      <nav className="flex justify-between items-center mx-16 my-3">
        <div className='flex items-center space-x-4'>
          <a className='flex items-center' href="#logo">
            <img src={logoImg} alt="logo" className="h-16"/>
            <span className="font-semibold text-rose-500 text-xl">cozycove</span>
          </a>
        </div>
        <div className="flex space-x-10 text-slate-600">
          <a href="#stay">
            Stays
          </a>
          <a href='#experience'>
            Experiences
          </a>
        </div>
        <div className='flex space-x-6'>
          <a href="#cozycove" className='text-sm mt-4 font-medium'>
            cozycove your home
          </a>
          <a href="#globe" className='mt-4'>
            <GoGlobe/> 
          </a>
          <button  className="flex border rounded-full py-1.5 px-3" >
                <IoMenu size={22} className="mr-2 mt-1.5 text-gray-900"/>
                <MdAccountCircle size={33} className='text-gray-600'/>
          </button>
          {dropdown ? <Dropdown/> : ''}
        </div>
      </nav>
      <Search/>
      <hr className='mt-6'/>
    </div>
  )
}

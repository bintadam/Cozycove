import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdCopyright } from "react-icons/md";

export default function Copyright() {
  return (
    <div className="flex justify-between mx-16 border-t border-gray-300 py-6 ">
        <div className="flex space-x-4 text-sm font-light">
            <p className="flex space-x-4"><MdCopyright className="mt-0.5 h-4"/> 2024 Cozycove, Inc.</p>
            <ul className="flex space-x-4 "> 
                <li>.Terms</li>
                <li>.Sitemap</li>
                <li>.Privacy</li>
                <li>.Your privacy choices</li>
            </ul>
        </div>
        <div className="flex space-x-4 text-sm font-medium">
            <div className="flex">
                <AiOutlineGlobal className="mt-1 mr-1" size={16}/>
                <p>English(US)</p>
            </div>
            <div className="flex ">
                <p>€</p>
                <p>Euro</p>
            </div>
            <div className="flex space-x-4">
                <a href="">
                    <FaInstagramSquare size={20}/>
                </a>
                <a href=""><FaTwitterSquare size={20}/></a>
                <a href=""><IoLogoFacebook size={23}/></a>
            </div>
        </div>
    </div>
  )
}

import { Navbar } from "flowbite-react";
import logoImg from '../assets/logo.png'

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand>
        <div className="flex ">
          <img src={logoImg} alt="logo" className="h-24"/>
          <span className="font-semibold text-blue-500">cozycove</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Navbar.Link>
          Stay
        </Navbar.Link>
        <Navbar.Link>
          Experience
        </Navbar.Link>
        <Navbar.Link>
          cozycove your home
        </Navbar.Link>
        <Navbar.Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

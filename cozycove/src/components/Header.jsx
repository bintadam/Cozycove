import { Navbar } from "flowbite-react";
import logoImg from '../assets/logo.svg'

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand>
        <img src={logoImg} alt="logo" className="h-28"/>
        <span className="font-semibold text-blue-500">cozycove</span>
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

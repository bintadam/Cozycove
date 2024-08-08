import { Navbar } from "flowbite-react";
import logoImg from '../assets/logo.png'
import Search from './Search'

export default function Header() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <img src={logoImg} alt="logo" className="h-16"/>
          <span className="font-semibold text-rose-500 text-xl">cozycove</span>
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
      <Search/>
    </div>
  )
}

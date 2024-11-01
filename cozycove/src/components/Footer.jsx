import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div className="bg-neutral-100">
      <div className="grid grid-cols-3 font-light text-sm tex mx-16 space-x-10 p-10">
        <div>
          <h3 className="font-medium mb-2">Support</h3>
          <div className="flex flex-col space-y-2">
            <a href="">Help Center</a>
            <a href="">AirCover</a>
            <a href="">Cancellation</a>
            <a href="">Concern</a>
            <a href="">Anti-discrimination</a>
            <a href="">Disability support</a>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Hosting</h3>
          <div className="flex flex-col space-y-2">
            <a href="">cozycove your home</a>
            <a href="">resources</a>
            <a href="">cozy-friendly apartments</a>
            <a href="">community</a>
            <a href="">AirCover for Hosts</a>
            <a href="">Find a co-host</a>
            <a href="">Join a free Hosting class</a>
            <a href="">Hosting responsibly</a>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Cozycove</h3>
          <div className="flex flex-col space-y-2">
            <a href="">Newsroom</a>
            <a href="">New features</a>
            <a href="">Careers</a>
            <a href="">Investors</a>
            <a href="">Gift cards</a>
            <a href="">cozycove.org emergency stays</a>
          </div>
        </div>
      </div>
      <Copyright/>
    </div>
  )
}

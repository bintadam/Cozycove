export default function Footer() {
  return (
    <div className="sm:flex bg-neutral-100">
      <div className="grid grid-cols-3 font-light mx-16 space-x-10 my-3">
        <div>
          <h3 className="font-medium mt-4">Support</h3>
          <div className="flex flex-col my-3">
            <a href="">Help Center</a>
            <a href="">AirCover</a>
            <a href="">Cancellation</a>
            <a href="">Concern</a>
            <a href="">Disability support</a>
          </div>
        </div>
        <div>
          <h3 className="font-medium mt-4 mb-1">Hosting</h3>
          <div className="flex flex-col">
            <a href="">cozycove your home</a>
            <a href="">resources</a>
            <a href="">cozy-friendly apartments</a>
            <a href="">community</a>
            <a href="">AirCover for Hosts</a>
          </div>
        </div>
        <div>
          <h3 className="font-medium ">Cozycove</h3>
          <div className="flex flex-col">
            <a href="">Newsroom</a>
            <a href="">New features</a>
            <a href="">Careers</a>
            <a href="">Investors</a>
            <a href="">Gift cards</a>
            <a href="">emergency stays</a>
          </div>
        </div>
      </div>
    </div>
  )
}

import { IoSearch } from "react-icons/io5";
import { Button } from "flowbite-react";

export default function Search() {
  return (
    <div className="grid place-content-center  m-auto">
        <form className="flex justify-between border rounded-full p-2 shadow-lg">
          <div className="flex flex-row hover:bg-slate-200 rounded-full">
            <label className="text-xs mx-4">Where</label>
            <input className="font-light border-0 text-sm focus:outline-none rounded-full p-0" placeholder="Search destinations"/>
          </div>
          <div className="flex">
            <label className="text-xs">Check in</label>
            <input className="font-light border-0 text-sm focus:outline-none" placeholder="Add dates"/>
          </div>
          <div className="flex">
            <label className="text-xs">Check out</label>
            <input className="font-light border-0 text-sm focus:outline-none" placeholder="Add dates"/>
          </div>
          <div className="flex">
            <label className="text-xs">Who?</label>
            <div className="flex justify-between">
              <input className="font-light border-0 text-sm focus:outline-none" placeholder="Add guests"/>
              <Button type="submit" className="rounded-full bg-rose-500 w-12 h-12 items-center">
                <IoSearch  size='16'/>
              </Button>
            </div>
          </div>
        </form>
    </div>
  )
}

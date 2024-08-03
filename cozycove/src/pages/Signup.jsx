import { Button, TextInput } from "flowbite-react"
import Countrycodes from "../components/Countrycodes"

export default function Signup() {
  // const [formData, setFormData] = useState({})
  return (
    <div className="md:grid place-content-center">
      <div className="md:border border-slate-500 rounded-lg m-2 p-2">
        <div className="border-b mb-4">
          <h3 className="text-center font-semibold text-base md:py-4">Log in or sign up</h3>
        </div>
        <div className="mx-5 md:mx-10">
          <div className=" ">
            <form>
              <h5 className="py-4 text-2xl font-medium">Welcome to Aircove</h5>
              <div className="rounded-lg">
                  <Countrycodes/>
                  <TextInput type="text" id='phonenumber' placeholder="Phone number" className="border-0"/>
              </div>
              <p className="text-xs font-light my-3">We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="font-semibold underline">Privacy Policy</span></p>
              <Button type="submit" className="w-full py-1 text-lg bg-gradient-to-r from-rose-500 to-pink-600">Continue</Button>
            </form>
          </div>
          <div className="flex justify-between mt-2">
            <hr className="flex-grow border-t h-1 mt-3"/>
            <p className="px-3">or</p>
            <hr className="flex-grow border-t  h-1 mt-3"/>
          </div>
          <div>
            <Button className="w-full py-1 text-lg  bg-white hover:bg-sky-700 text-black border border-black rounded-lg my-2">Continue with Facebook</Button>
            <Button className="w-full py-1 text-lg bg-white text-black border border-black rounded-lg my-2">Continue with Google</Button>
            <Button className="w-full py-1 text-lg bg-white text-black border border-black rounded-lg my-2">Continue with Apple</Button>
            <Button className="w-full py-1 text-lg bg-white text-black border border-black rounded-lg my-2">Continue with email</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

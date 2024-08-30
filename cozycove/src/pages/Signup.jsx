import { Button, TextInput } from "flowbite-react"
import Countrycodes from "../components/CountryCodes"
import FacebookOAuth from "../components/OAuth/FacebookOAuth"
import AppleOAuth from "../components/OAuth/AppleOAuth"
import EmailOAuth from "../components/OAuth/EmailOAuth"
import GoogleOAuth from "../components/OAuth/GoogleOAuth"

export default function Signup() {
  // const [formData, setFormData] = useState({})
  return (
    <div className="md:grid place-content-center">
      <div className="md:border border-slate-500 rounded-lg m-f2 p-2">
        <div className="border-b mb-4">
          <h3 className="text-center font-semibold text-base md:py-4">Log in or sign up</h3>
        </div>
        <div className="mx-5 md:mx-10">
          <div className=" ">
            <form>
              <h5 className="py-4 text-2xl font-medium">Welcome to Aircove</h5>
              <div className="border rounded-lg">
                  <Countrycodes/>
                  <TextInput type="number" id='phonenumber' placeholder="Phone number" className="border p-2"/>
              </div>
              <p className="text-xs font-light my-3">We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="font-semibold underline">Privacy Policy</span></p>
              <Button type="submit" className="w-full py-1 text-lg bg-gradient-to-r from-rose-500 to-pink-600">Continue</Button>
              <div className="flex justify-between mt-3">
                <hr className=""/>
                <span className="font-light text-xs ">or</span>
                <hr className=""/>
              </div>
              <FacebookOAuth className="my-2"/>
              <GoogleOAuth/>
              <AppleOAuth/>
              <EmailOAuth/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

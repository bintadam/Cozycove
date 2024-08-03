import { Button, Label, TextInput } from "flowbite-react"

export default function Signup() {
  // const [formData, setFormData] = useState({})
  return (
    <div className="">
      <h3 className="">Log in or sign up</h3>
      <div>
        <div>
          <form>
            <h5>Welcome to Cozycove</h5>
            <div className="border-2 border-gray-400">
              <select>
                <Label>Country code</Label>
              </select>
              <TextInput type="text" id='phonenumber'/>
            </div>
            <div>
              <TextInput type="text" id='phonenumber' placeholder="Phone number"/>
            </div>
            <p>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
            <Button type="submit" className="w-full bg-cyan-400">Continue</Button>
          </form>
        </div>
        <p>or</p>
      </div>
    </div>
  )
}

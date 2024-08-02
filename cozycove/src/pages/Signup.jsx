import { Button, Label, TextInput } from "flowbite-react"


export default function Signup() {
  const [formData, setFormData] = useState({})
  return (
    <div>
      <div>
        <div>
          <form>
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
            <Button type="submit">Continue</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

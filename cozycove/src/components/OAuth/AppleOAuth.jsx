import { Button } from 'flowbite-react'
import { IoLogoApple } from "react-icons/io";

export default function AppleOAuth() {
  return (
    <Button className='w-full border-black bg-white text-black py-1 mt-4'>
        <IoLogoApple size='24'/>
        <span>Continue with Apple</span> 
    </Button>
  )
}

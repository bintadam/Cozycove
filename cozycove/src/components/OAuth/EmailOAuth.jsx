import { Button } from 'flowbite-react'
import { HiOutlineMail } from "react-icons/hi";

export default function EmailOAuth() {
  return (
    <Button className='flex w-full border-black bg-white text-black py-1 mt-4'>
        <HiOutlineMail className='flex-none' size='24'/>
        <span className='mt-0.5'>Continue with Email</span>
    </Button>
  )
}

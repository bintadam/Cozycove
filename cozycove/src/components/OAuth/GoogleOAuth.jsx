import { Button } from 'flowbite-react'
import googleImg from '../../assets/google-symbol.png'

export default function GoogleOAuth() {
  return (
    <Button className='w-full border-black bg-white text-black py-1 mt-4'>
        <img src={googleImg} alt="google" className='h-4'/>
        <span>Continue with Google</span>
    </Button>
  )
}

import { Button } from 'flowbite-react'
import facebookImg from '../../assets/facebook-2.png'

export default function FacebookOAuth() {
  return (
    <Button className='flex w-full border-black bg-white text-black py-1 mt-4'>
        <img src={facebookImg} alt="facebook"  className='grow-0 h-5'/>
        <span className='grow'>Continue with Facebook</span>
    </Button>
  )
}

import { Mail, MapPinHouse, Phone } from 'lucide-react'
import honey from '../assets/images/honey-contact.png'

function Contact() {
  return (
    <div id='contact' className='flex font-primary items-center justify-center p-5 gap-20 mt-20'>
        <img src={honey} alt="" className='' />
        <div className='flex flex-col gap-4 container bg-white p-10 max-w-2xl rounded-lg'>
            <h1 className='text-black text-5xl font-bold tracking-wide'>MORE INFORMATION</h1>
            <p className='text-gray-700 font-medium max-w-lg text-md'>We believe that communication is the key to great relationships, and we’d love to hear from you! Whether you have a question about our services, need assistance, or just want to share your thoughts, we’re here to help.</p>
            <div className='flex flex-col mt-10'>
                <ul className='text-gray-700 space-y-4'>
                  <li className='flex items-center gap-3'>
                  <MapPinHouse className='text-orange-500 w-7 h-7'/>
                  <h3 className='font-bold'>MELLIFERA HOUSE KUDUS</h3>
                  </li>
                  <li className='flex items-center gap-3'>
                  <Phone className='text-orange-500 w-7 h-7'/>
                  <h3 className='font-bold'>+62 812-8635-2159</h3>
                  </li>
                  <li className='flex items-center gap-3'>
                  <Mail  className='text-orange-500 w-7 h-7'/>
                  <h3 className='font-bold'>melliferahoney@gmail.com</h3>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact
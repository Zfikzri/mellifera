import honeyHome from '../assets/images/home-honey.png'
import textHoney from '../assets/images/text-honey-home.png'
import bee1 from '../assets/images/bee-1.png'
import bee2 from '../assets/images/bee-2.png'
import bee3 from '../assets/images/bee-3.png'
import bee4 from '../assets/images/bee-4.png'
import flower1 from '../assets/images/flower-1.png'
import flower2 from '../assets/images/flower-2.png'
import flower3 from '../assets/images/flower-3.png'
import line1 from '../assets/images/line-1.png'

function Home() {
  return (
    <div className="relative">
      <img 
        src={textHoney} 
        alt="" 
        className="absolute top-60 left-330 w-48"
      />
      <img src={bee1} alt="" className='absolute top-30 left-75 w-15 h-auto' />
      <img src={bee2} alt="" className='absolute top-30 left-320 w-20 h-auto' />
      <img src={bee3} alt="" className='absolute top-43 left-220 w-12 h-auto' />
      <img src={bee4} alt="" className='absolute top-100 left-5 w-11 h-auto' />
      <img src={bee4} alt="" className='absolute bottom-40 left-235 w-8 h-auto' />
      <img src={flower1} alt="" className='absolute left-0 top-20 w-30 h-auto'/>
      <img src={flower2} alt="" className='absolute left-0 top-180 w-30 h-auto'/>
      <img src={flower3} alt="" className='absolute right-0 top-120 w-30 h-auto'/>
      <div className='flex p-15'>
        <div className='mt-25 text-black font-primary p-10'>
            <h2 className='ml-3 leading-none tracking-[.25em] font-bold'>FRESH & SWEET AS HONEY.</h2>
            <h1 className='leading-none tracking-wide font-bold text-9xl'>HONEY BEE</h1>
            <p className='ml-3 max-w-md leading-7 text-sm font-medium'>
              Lorem ipsum dolor sit amet, sint nostrum mea ut, vel semper vidisse eu usu temporibus disputationi voluptatibus in ei est possit salutandi abhorrea acusa
            </p>
            <button className='mt-3 ml-3 font-bold tracking-wider p-3 bg-[#C74817] text-white w-1/4 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#C74817] hover:to-[#ff7f50] hover:shadow-lg hover:scale-105'>
             VIEW MORE
            </button>

        </div>
        <img src={honeyHome} className='w-2xl h-auto' alt="" />
      </div>
      <img src={line1} alt="" className='mx-auto w-auto mt-5'/>
    </div>
  )
}

export default Home

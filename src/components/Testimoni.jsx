import avatar from '../assets/images/testimoni-1.png'
import honey from '../assets/images/honey-2.png'
import bee from '../assets/images/bee-1.png'

function Testimoni() {
  return (
    <div className='relative'>
        <img src={honey} alt="" className='absolute w-50 right-10 top-35 '/>
        <img src={bee} alt="" className='absolute w-10 left-130 top-0 '/>
        <div className='flex mt-30 font-primary gap-20 justify-center items-center'>
        <img src={avatar} alt=""/>
        <div className='flex flex-col gap-1 '>
            <h3 className='text-gray-500 text-2xl italic max-w-3xl text-wrap'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."</h3>
            <h1 className='text-black font-bold text-2xl tracking-wide'>JULIA <br /> KLEIN</h1>
            <h2 className='text-orange-500 uppercase font-bold tracking-wider'>Biologist</h2>
        </div>
    </div>
    </div>
  )
}

export default Testimoni
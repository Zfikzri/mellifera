import gallery1 from '../assets/images/gallery-1.png'
import gallery2 from '../assets/images/gallery-2.png'
import gallery3 from '../assets/images/gallery-3.png'
import gallery4 from '../assets/images/gallery-4.png'
import gallery5 from '../assets/images/gallery-5.png'
import gallery6 from '../assets/images/gallery-6.png'
import bee from '../assets/images/bee-5.png'

function Gallery() {
  return (
    <div id='gallery' className='relative'>
       <img src={bee} alt="" className='absolute top-25 w-15 h-auto left-40'/>
       <div className='flex flex-col font-primary p-10 items-center justify-center text-center mt-40 gap-20'>
         <div className='flex flex-col gap-2'>
            <h1 className='text-black text-6xl font-bold uppercase tracking-wide leading-15'>Our <br /> Gallery</h1>
            <p className='font-medium text-xl max-w-2xl text-gray-700'>Mellifera is a true beehive of activity! Check out the latest news and events in our image gallery and see for yourself.</p>
         </div>
         <div className='flex flex-col gap-6'>
             <div className='flex px-10 rounded-lg gap-5'>
                 <img src={gallery1} alt="" />
                 <img src={gallery2} alt="" />
                 <img src={gallery3} alt="" />
             </div> 
             <div className='flex px-10 rounded-lg gap-5'>
                 <img src={gallery4} alt="" />
                 <img src={gallery5} alt="" />
                 <img src={gallery6} alt="" />
             </div> 
         </div>
    </div>
    </div>
  )
}

export default Gallery
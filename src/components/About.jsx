import image1 from '../assets/images/image-1.png'
import handSign from '../assets/images/sign.png'
import bee from '../assets/images/bee-5.png'
import bee2 from '../assets/images/bee-1.png'
import { CheckCircle } from "lucide-react";

function About() {
  return (
    <div id='about' className='relative'>
        <img src={bee} alt="" className='absolute right-8 top-100 w-15 h-auto'/>
        <img src={bee2} alt="" className='absolute right-20 bottom-0 w-18 h-auto'/>
        <div className="flex p-30 gap-15">
        <div className="text-black font-primary flex flex-col gap-5">
            <img src={image1} alt="" />
            <h1 className='font-bold text-5xl max-w-1'>OUR MISSION</h1>
            <p className='max-w-2xl font-medium leading-7'>The bees live as they naturally would and their benefits reach more people. Our goal is to raise <strong>San Diego’s bee population</strong> throughout the city and at the same time <strong>spread awareness among the community.</strong></p>
            <p className='max-w-2xl font-medium leading-7'>Our hope is that these backyard hives will facilitate a dialogue among neighbours, friends, family and the community at large about the huge importance of bees.</p>
            <img src={handSign} alt="" className='w-40 h-auto' />
        </div>
        <div className="container bg-white max-w-md p-10 font-primary">
            <h1 className="text-black font-bold text-4xl">ABOUT US</h1>
            <div className='mt-8 flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                   <h2 className='uppercase text-xl text-orange-500 font-bold'>Bringing Nature’s Sweetness to You!</h2>
                   <p className='text-gray-400'>Welcome to Pure Honey Co., your trusted source for 100% pure, natural honey straight from the finest beekeepers. Our mission is simple: to bring you high-quality, raw honey that’s as fresh, pure, and sweet as nature intended</p>
                </div>
                <div className='flex flex-col gap-3'>
                   <h2 className='uppercase text-xl text-orange-500 font-bold'>Why Choose Us?</h2>
                   <ul className="space-y-2 text-gray-400">
                     <li className="flex items-center gap-3">
                     <CheckCircle className="text-orange-500 w-7 h-7" />
                     <span><strong>Pure & Organic</strong> – No additives, no preservatives, just pure honey.</span>
                     </li>
                     <li className="flex items-center gap-3">
                     <CheckCircle className="text-orange-500 w-7 h-7" />
                     <span><strong>From Hive to Home</strong> – Sourced directly from local beekeepers.</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <CheckCircle className="text-orange-500 w-7 h-7" />
                    <span><strong>Sustainably Harvested</strong> – We care about the bees and the environment.</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <CheckCircle className="text-orange-500 w-7 h-7" />
                    <span><strong>Health Benefits</strong> – Rich in antioxidants, vitamins, and natural energy.</span>
                    </li>
                   </ul>

                </div>
                <p className='text-black font-semibold'>We believe that honey is more than just a sweetener it`s a gift from nature, packed with flavor, health benefits, and a touch of warmth in every drop.</p>
                <p className='text-black font-semibold'>Join us in enjoying the golden goodness of nature! 🍯✨</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
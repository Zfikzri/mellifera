import { ShoppingBag } from 'lucide-react';
import product1 from '../assets/images/product-1.png'
import product2 from '../assets/images/product-2.png'
import product3 from '../assets/images/product-3.png'
import flower from '../assets/images/flower-3.png'
import bee from '../assets/images/bee-4.png'

function Product() {
    return (
      <div className='relative'>
        <img src={flower} alt="" className='absolute left-0 rotate-180 top-60 w-50 h-auto'/>
        <img src={bee} alt="" className='absolute left-60 top-20 w-10 h-auto'/>
       <div className="mt-30 flex flex-col p-5 items-center justify-center font-primary gap-5">
        <div className=" text-black flex flex-col text-center gap-4">
          <h1 className="font-bold text-6xl w-full tracking-wide leading-15">OUR <br /> PRODUCTS</h1>
          <p className="font-medium text-xl max-w-2xl text-gray-700">
            Check out our online shop for cute bee-themed apparel, unique bee
            suits, educational tools, gift certificates and more.
          </p>
        </div>
        <div className="flex p-20 gap-5">
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <img src={product1} alt="" />
                <h1 className="text-black font-bold tracking-wide w-full text-3xl">HEATHER <br /> HONEY</h1>
                <h2 className='text-orange-500 text-2xl font-semibold'>$10.00</h2>
                <p className='text-gray-500 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <button className='text-black flex gap-2 uppercase font-bold tracking-wider'><ShoppingBag className='w-5 h-5'/> Add To Cart</button>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <img src={product2} alt="" />
                <h1 className="text-black font-bold tracking-wide w-full text-3xl">JARRAH <br /> HONEY</h1>
                <h2 className='text-orange-500 text-2xl font-semibold'>$10.00</h2>
                <p className='text-gray-500 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <button className='text-black flex gap-2 uppercase font-bold tracking-wider'><ShoppingBag className='w-5 h-5'/> Add To Cart</button>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <img src={product3} alt="" />
                <h1 className="text-black font-bold tracking-wide w-full text-3xl">LINDEN <br /> HONEY</h1>
                <h2 className='text-orange-500 text-2xl font-semibold'>$10.00</h2>
                <p className='text-gray-500 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <button className='text-black flex gap-2 uppercase font-bold tracking-wider'><ShoppingBag className='w-5 h-5'/> Add To Cart</button>
            </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Product;
  
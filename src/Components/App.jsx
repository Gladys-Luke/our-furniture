import React, {useEffect} from 'react'
import Card from "./Card"
import Products from "../products";
import Furniture from "./furniture";
import Footer from "./Footer";
import AOS from 'aos'
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  
  return (
    <div>
      <h1 
        data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        className="flex justify-center text-center p-10 text-3xl font-bold text-[#3A3A3A]">Our Products</h1>
      
      <div 
        data-aos="fade-up" 
        data-aos-easing="ease-out-cubic" 
        data-aos-duration="3000"  
        className='grid grid-cols-4 gap-4'>
      {
        Products.map((product, id) => (
        <Card 
          key={id}
          name={product.name}
          img={product.img}
          type={product.type}
          price={product.price}
          old={product.old}
        />

        ))
      }
      
     </div>
     <div className='flex justify-center text-center'>
        <button className=' py-1 px-14 border-solid border-2 my-6 border-[#E89F71] text-[#E89F71] hover:bg-[#E89F71] hover:text-[#ffffff]' type="button">Show More</button>
      </div>
      <Furniture />
      <Footer />
    </div>
   
  );
}

export default App;

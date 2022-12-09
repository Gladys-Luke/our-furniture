import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function Furniture() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
      }, []);

  return (
    <div data-aos="fade-up" 
     className='w-[99%] m-auto'>
    <div className='flex flex-col justify-center text-center pt-10'>
        <p>Share your setup with</p>
        <h1 className='font-bold text-xl'>#FuniroFurniture</h1>
    </div>
        <div className='w-full overflow-hidden flex flex-col gap-4'>
      <div 
       data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      className='flex flex-col gap-2 lg:flex-row xl:flex-ro md:flex-row sm:flex-col '>
      <img  src='/assets/images/Rectangle-1.png' alt='' />  
      <img className='h-72 m-auto' src='/assets/images/Rectangle-2.png' alt='' />  
      <img className='h-80 mt-12' src='/assets/images/Rectangle-3.png' alt='' />  
      </div>
      <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className='flex flex-col gap-2 lg:flex-row xl:flex-ro md:flex-row sm:flex-col'>
      <img src='/assets/images/Rectangle-4.png' alt='' />  
      <img className='w-80 mb-16' src='/assets/images/Rectangle-5.png' alt='' />  
      <img className='mb-10' src='/assets/images/Rectangle-6.png' alt='' />  
      <img className='ml-4 ' src='/assets/images/Rectangle-7.png' alt='' />  
      </div>
    </div>
    </div>
  )
}

export default Furniture;
import React from 'react'

const Footer = () => {
  
  
    // const  = document.getElementById('')
    // if() return
    // if(){ 
    //   ?.classList.add('hidden') 
    // } else {
    //   ?.classList.remove('hidden')
    // }
  

  return (
    <div id="footer" className='grid place-content-center gap-4 py-2 '>
        
        <div className='flex flex-col items-center justify-center md:gap-3 text-sm lg:flex-row absolute inset-x-0 bottom-[10%] '>
            <button className=' bg-[#393c41] opacity-70 rounded-md px-44 text-sm py-3 text-white'>Order Now</button>
            <button  className='bg-[#393c41] opacity-70 rounded-md px-44 text-sm py-3 tracking-tight text-white mt-3 md:mt-0 '>Demo Drive</button>
        </div>
        
        <div className='opacity-80 text-white text-xs px-8 text-center'>*Excludes taxes and fees with price subject to change. Available in select states. <a href="#" className='underline tracking-wide'>See details.</a></div>
    </div>
  )
}

export default Footer
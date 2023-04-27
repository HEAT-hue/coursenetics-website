import React from 'react'

function Footer() {
  return (
    <div className='bg-[#00007EBF] text-white flex flex-col items-center gap-3 p-10 md:p-[100px] md:gap-5'>
      <h3 className='font-bold text-3xl md:text-5xl'>Coursenetic</h3>
      <p className='text-2xl md:text-4xl font-medium md:max-w-[502px] text-center'>Creating a better tomorrow on coursenetic</p>
      <button className='bg-white text-pry font-bold p-2 md:p-3.5 rounded'>Get Started</button>
    </div>
  )
}

export default Footer

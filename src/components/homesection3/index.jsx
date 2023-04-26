import React from 'react'
import picture from './../../assets/people.svg'

function Homesection3() {
  return (
    <div className='md:p-12'>
             <h3 className='flex justify-center font-bold text-2xl md:text-5xl text-pry mb-5'>Coursenetic</h3>
        <section className='md:flex md:gap-6'>
        <img src={picture} className='w-80'/>
        <div className='md:flex md:gap-3 md:flex-col'>
            <h3 className='text-2xl md:text-[42px] md:leading-[133.9%] font-semibold'>Creating a better tomorrow
on <span className='text-pry'>coursenetic</span></h3>
<p className='font-normal text-2xl md:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .</p>
<button className='w-fit bg-pry text-white rounded p-3 font-semibold'>Get Started</button>
        </div>
        </section>
    </div>
  )
}

export default Homesection3

import React from 'react'
import level from './../../assets/level.svg'
import moyo from './../../assets/react.svg'

function Coursecard({courseName, courseTitle, courseLevel}) {
  return (
    <div className='flex items-center gap-6 border border-1 p-6 mt-5 rounded border-pry'>
      <div className={`flex flex-col gap-3 bg-[url('${moyo}')]`}>
        <h2>{courseName}</h2>
        <button className='text-pry font-bold bg-white rounded-sm flex-end'>Start Now</button>
      </div>
      <div>
        <h2 className='font-bold text-2xl'>{courseName}</h2>
        <p>{courseTitle}</p>
        <div className='flex flex-row'>
            <img src={level}/>
            <h3 className='font-medium text-2xl'>{courseLevel}</h3>
        </div>
      </div>
    </div>
  )
}

export default Coursecard

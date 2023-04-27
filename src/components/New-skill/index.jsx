import { useState } from "react"
import Coursecard from "../course-card"
// import { useSearchParams } from "react-router-dom"

function Newskill() {
    // const [searchParams, setSearchParams] = useSearchParams({})
    const skills = ['Web Development', 'UX design', 'Virtual Assistant', 'Marketing and Sales', 'Copywriting' ]
   const [activeThumb, setActiveThumb]= useState('Web Development')
   const courses =[
    {name : 'Web Development'}
   ]

   


    
  return (
    <div className="p-3 md:p-16">
        <h1 className="text-pry text-3xl font-bold md:text-4xl mb-3">It's an Era to acquire a new skill</h1>
        <nav className="flex justify-between">
            {skills.map((item,idx)=> {
                return (
                    <div key={idx} className="cursor-pointer" onClick={()=> setActiveThumb(item)}>
                    <h3 className="text-xl font-semibold text-pry" >{item}</h3>
                    </div>
                )
            })}
        </nav>
        
{activeThumb === 'Web Development' &&
<Coursecard courseName="Web Development" courseTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi ." courseLevel="Beginner"/>}
{activeThumb === 'UX design' && 
<Coursecard courseName="UX Design" courseTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi ." courseLevel="Beginner"/>
}
{activeThumb ===  'Virtual Assistant' && 
<Coursecard courseName="Virtual Assistant" courseTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi ." courseLevel="Advanced"/>}
{activeThumb === 'Marketing and Sales' && 
<Coursecard courseName="Marketing and Sales" courseTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi ." courseLevel="Intermediary"/>}
{activeThumb === 'Copywriting' && 
<Coursecard courseName="Copywriting" courseTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi ." courseLevel="Advanced"/>}



    </div>
  )
}

export default Newskill

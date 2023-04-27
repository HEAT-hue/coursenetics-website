import virtualimg from './../../assets/virtual.jpg'
import webdev from './../../assets/webdev.jpg'
import marketing from './../../assets/marketing.jpg'

import lesson from './../../assets/lesson.svg'
function Trendingcourses() {

const courses = [
  {name: 'Marketing and Sales', link: '/', number: '12', duration: '8', bg: marketing },
  {name: 'Web Development', link: '/', number: '10', duration: '6', bg: webdev},
  {name: 'Virtual Assistant', link: '/', number: '8', duration: '4' ,bg: virtualimg}
]

  return (
    <div className="p-3 md:p-16">
      <h2 className="text-pry font-bold text-3xl mb-3">Trending courses are here</h2>
      <div className="p-4 md:flex md:flex-row md:justify-between">
        {courses.map((item, idx)=> {
          return (
          <section key={idx} >
            <div className={`py-4 px-8 bg-[url('${item.bg}')] bg-black rounded-lg flex flex-col justify-between h-48 md:w-[365px] }}`}>
             <h2 className="text-white font-bold text-2xl w-[179px]">{item.name}</h2>
             <button className="flex justify-self-end bg-white text-pry font-medium w-fit p-2 rounded">Enroll Now</button>
            </div>
            <div className='ml-3'>
              <div className='flex items-center my-2 '>
                <img src={lesson}  alt='coursenetic'/>
              <h2 className='font-medium text-xl'>Lesson {item.number} </h2>
              </div>
              <h4 className='text-base font-normal'>Duration: {item.duration} Weeks</h4>
            </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Trendingcourses

import { Link } from 'react-router-dom'
import logo from './../../assets/logo.svg'
import search from './../../assets/search.svg'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

function Navbar() {
  const [open, setOpen] = useState(true)

  const close = ()=> {
    setOpen(!open)
  }
  const pages = [
    {name: 'HOME', link: '/'},
    {name: 'COURSE', link: '/course'},
    {name: 'ABOUT', link: '/about'},
    {name: 'HELP', link: '/help'}
  ]
  return (
    <div className='md:px-20 md:flex md:flex-row md:items-center md:justify-center md:gap-40'>
      {/* Logo and close/opening button */}
      <div className='flex items-center justify-between px-3'>
      <img src={logo}/>
      <div className='md:hidden' onClick={close}>{open ? <GiHamburgerMenu className='text-2xl text-pry'/> : <GrClose className='text-2xl text-pry'/> }</div>
      </div>

      {/* Section that contains all the links, search bar and button */}
      <section className='hidden md:flex md:items-center md:gap-20' >
        {/* Links */}
      <div className='flex flex-col gap-3 md:flex md:flex-row md:gap-10 font-bold'>
       {pages.map((item, idx)=>{
        return (
          <ul>
          <Link to={item.link}>
          <li>{item.name}</li>
          </Link>
          </ul>
        )
       })}
      </div>

      {/* Search */}
      <div className='bg-[#F1F0F0] rounded-3xl flex items-center p-2 gap-2 w-[220px]'>
        <img src={search}/>
        <input type='search' placeholder='Search' className='bg-[#F1F0F0] outline-none w-20'/>
      </div>

      {/* Button */}
      <div>
        <button className='border-2 px-5 py-2 rounded-lg border-[#00007E] font-bold text-[#00007E] w-[180px]'>Get Started</button>
      </div>
      </section>
      {/* </section> */}

      {/* Mobile links */}
      {open? '' : (
        <section class='md:hidden font-bold'>
      {pages.map((item,idx)=> {
        return(
          <ul>
            <Link to={item.link}>
            <li>
              {item.name}
            </li>
          </Link>
          </ul>
        )
      })}
      </section>
      )}
      
      
      </div>
    
  )
}

export default Navbar

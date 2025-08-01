import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-black p-5 justify-center flex '>
      <img src='./src/images/hero-logo-wthout-bg.png' width={50} className='mr-20'/>
      <ul className='justify-between flex p-4 w-xl rounded-md border-2 sticky border-neutral-400/20 items-center text-neutral-200 backdrop:blur-[1px] bg-neutral-400/20 transition-0.3'>
        <li className='hover:text-neutral-50 cursor-pointer'><Link className='nav-link' to='/'>Home</Link></li>
        <li className='hover:text-neutral-50 cursor-pointer'><Link className='nav-link' to='/scoreboard'>Scoreboard</Link></li>
        <li className='hover:text-neutral-50 cursor-pointer'><Link className='nav-link' to='/sponsors'>Sponsors</Link></li> 
        <li className='hover:text-neutral-50 cursor-pointer'><Link className='nav-link' to='/support'>Support</Link></li>
      </ul>
      <button className=' text-white cursor-pointer pl-5 pr-5 w-32 bg-gray-700 rounded-3xl ml-50'>Login</button>
      <button className=' text-white cursor-pointer pl-5 pr-5 w-32 bg-amber-400 rounded-3xl ml-50'>Sign Up</button>
    </div>
  )
}

export default Navbar

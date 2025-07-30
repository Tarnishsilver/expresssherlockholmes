import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-amber-200 p-5 justify-center flex'>
      <img src='./src/images/hero-logo-wthout-bg.png' width={100}/>
      <ul className='justify-between flex p-4 w-xl rounded-md border-2 sticky border-neutral-400/20  text-neutral-200 backdrop:blur-[1px] bg-neutral-400/20 transition-0.3'>
        <li className='hover:text-neutral-50 cursor-pointer'>Home</li>
        <li className='hover:text-neutral-50 cursor-pointer'>Scoreboard</li>
        <li className='hover:text-neutral-50 cursor-pointer'>Sponsors</li> 
        <li className='hover:text-neutral-50 cursor-pointer'>Support</li>
      </ul>
      <button className='hover:bg-green-900 text-white cursor-pointer pl-2 pr-2 bg-green-700 rounded-md ml-50'>Login</button>
      <button className='hover:bg-green-900 text-white cursor-pointer pl-2 pr-2 bg-green-700 rounded-md ml-50'>Sign Up</button>
    </div>
  )
}

export default Navbar

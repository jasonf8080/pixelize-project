import React, { useEffect, useState } from 'react'
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from 'react-router-dom';



export const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if(darkMode){
      document.documentElement.classList = 'dark'
    } else {
      document.documentElement.classList = '';
    }
  }

  useEffect(() => {
    toggleDarkMode();
  }, [])




  return (
    <nav className='bg-secondary-color dark:bg-dark-primary-color w-full py-4 md:py-6 text-white dark:text-white'>
      <div className="max-w-full px-4 md:max-w-7xl md-px-10 mx-auto flex justify-between items-center">
      <Link to='/'><h1 className='text-lg md:text-2xl'>PIXELIZE</h1></Link>

      <div className="flex items-center relative">
        <div className='rounded-3xl w-[75px] md:w-[90px] relative flex justify-around items-center py-2 px-1 md:py-3 md:px-2 cursor-pointer border-2 border-white dark:border-main-color' onClick={toggleDarkMode}>
          <div className={`${!darkMode && 'translate-x-[93%]'} dark-btn-slide left-[2%] absolute bg-white dark:bg-main-color w-[50%] rounded-3xl h-[95%] translate-y-[-50%] top-[50%]`}></div>
          <span><BsSun/></span>
          <span><BsMoon/></span>
        </div>
      </div>
     </div>
    </nav>
  )
}

//User Page -- Link through Home, Modal --> Finish Modal Design

//Category Page
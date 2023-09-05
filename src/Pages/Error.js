import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[80vh] dark:text-white'>
        <p className='text-xl'>Something went wrong</p>
       <Link to={'/'}>
            <p className='px-8 py-4 bg-secondary-color dark:bg-main-color text-white mt-6 rounded-lg'>Back to Home</p>
       </Link>
    </div>
  )
}

export default Error
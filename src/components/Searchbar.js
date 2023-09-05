import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useGlobalContext } from '../context'

export const Searchbar = () => {

  const {setActiveCategory, queryObject, setQueryObject} = useGlobalContext();
  

  const handleSearch = () => {
    setActiveCategory(null)
    setQueryObject({
      query: queryObject.tempQuery,
      newQuery: true, 
    })
  }


  return (
    <div className='h-[60px] search-container mt-2 md:mt-5 max-w-7xl mx-auto px-5 md:px-10 duration-300 overflow-hidden'>
        <div id="input-container" className="flex w-full bg-transparent dark:text-white z-[1] border-gray-300 dark:border-gray-600 border-b-[1px] px-5">
          <input type="text" placeholder='Search for free photos' className='rounded-l-md w-full py-4 text-xs md:text-md outline-none focus:none bg-transparent dark:text-white'
          value={queryObject.tempQuery} onChange={(e) => setQueryObject({...queryObject, tempQuery: e.target.value})}/>
          <button className="flex justify-center items-center text-gray-500">
            <BsSearch onClick={handleSearch}/>
          </button>
        </div>
    </div>
  )
}

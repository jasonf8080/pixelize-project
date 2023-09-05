import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const categoriesData = [
    'animals',
    'abstract',
    'architecture',
    'beach',
    'business',
    'cars',
    'city',
    'design',
    'fashion',
    'food',
    'nature',
    'ocean',
    'people',
    'space',
    'sunset',
    'texture',
    'university',
]

export const Categories = () => {

  const {activeCategory, setActiveCategory, setQueryObject} = useGlobalContext();

  const handleClick = (item, index) => {
    setQueryObject({query: item, newQuery: true, tempQuery: ''}) //What is being submitted and searched, changes the URL

    if(activeCategory === index){
        return setActiveCategory(null) //Numeric value that will match a state when active
        } else {
        return setActiveCategory(index)
    }
  }

  const slideRight = () => {
    let categorySlider = document.getElementById('category-slider');
    categorySlider.scrollLeft = categorySlider.scrollLeft + 150;
  }

  const slideLeft = () => {
    let categorySlider = document.getElementById('category-slider');
    categorySlider.scrollLeft = categorySlider.scrollLeft - 150;
  }
  


  return (
    <div className='mt-8 md:mt-14 max-w-7xl mx-auto px-5 md:px-10 relative'>
        <div id='category-slider' className="scroll-smooth scrollbar-hide max-w-full mx-auto flex items-center space-x-2 md:space-x-3 overflow-x-scroll rounded-md">
            {categoriesData.map((item, index) => {
               return <>
               <p key={index} onClick={() => handleClick(item, index)}
               className={`${activeCategory === index ? 'text-white dark:bg-main-color bg-secondary-color font-bold' : 'text-gray-500 dark:text-white bg-transparent  dark:color-white border-none'}
               text-sm md:text-lg  px-5 py-2 rounded-md cursor-pointer`}
               >{item}</p>
               </>
            })}
        </div>

        <div onClick={slideLeft} className="rounded-md cursor-pointer hidden md:flex items-center justify-center bg-opacity-40
          text-black dark:text-white absolute top-[50%] translate-y-[-50%] left-[10px]">
          <FaChevronLeft/>
        </div>

        <div onClick={slideRight} className="rounded-md cursor-pointer hidden md:flex items-center justify-center bg-opacity-40
         text-black dark:text-white absolute top-[50%] translate-y-[-50%] right-[10px]">
          <FaChevronRight/>
        </div>
       
    </div>
  )
}

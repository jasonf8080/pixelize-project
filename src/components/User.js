import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsImages} from 'react-icons/bs';


const User = ({totalPhotos, setTotalPhotos}) => {
    const {username} = useParams();

    const url = `https://api.unsplash.com//users/${username}?client_id=${process.env.REACT_APP_API_KEY}`
   
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        bio: '',
        location: '',
        photos: [],
        profile_picture: '',
        total_photos: '',
        username: ''
    })
    
    
    const getUserData = async() => {
       setLoading(true)
       try{
           const response = await fetch(url)
           const data = await response.json();

           const {bio, photos, location, profile_image:{large}, total_photos, username} = data;

           setUser({bio, photos, location, total_photos, username, profile_picture: large})
           setTotalPhotos(total_photos)
           setLoading(false)
       } catch (error){
        console.log(error)
       }

    }

    useEffect(() => {
        getUserData();
    }, [username])

  return (
    <section className="flex flex-col justify-center items-center py-10 max-w-7xl mx-auto">
       <div className="max-w-[150px] min-w-[150px] h-[150px] rounded-full border-[2px] border-gray-200  mb-8 relative">
          {loading ?  <div className="skeleton-loader rounded-full"></div> : <img src={user.profile_picture}
           className='max-w-[100%] h-full w-full rounded-full' alt="" />}
       </div>

        <div className='max-w-full px-5 text-center'>
          <h3 className="text-center font-bold mb-4 text-black dark:text-white text-xl">{loading ? 'Loading...' : user.username}</h3>
          {loading ? 'Loading...' : user.location && 
          <p className="text-center text-gray-600 dark:text-gray-400 mb-4 flex justify-center items-center ">
              <span className='mr-2 translate-y-[-2px]'><HiOutlineLocationMarker/></span>
              {user.location}
          </p>}

          <p className="text-center max-w-[800px] text-gray-600 dark:text-gray-400 mb-0 text-sm md:text-lg">
            {loading ? 'Loading...' : user.bio}
          </p>

          <p className="text-center flex justify-center items-center text-gray-600 dark:text-gray-400 my-5">
            <span className='translate-y-[-2px] mr-2 text-2xl'><BsImages/></span>
            {totalPhotos}
          </p>

          <div className="w-[200px] mx-auto px-5 md:px-10 border-b-[2px] border-secondary-color dark:border-main-color"></div>
        </div>
    
        </section>
  )
}

export default User
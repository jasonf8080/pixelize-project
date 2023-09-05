import React from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom';

const Image = (image) => {
  
  let {urls:{regular}, user:{username, profile_image:{medium: profile_picture}}, id} = image;
  regular = regular.replace("w=1080", "w=10");

  const navigate = useNavigate();

  const {setShowModal, setPhotoID, setPagePosition} = useGlobalContext();

  const handleClick = async() => {
      setPagePosition(window.scrollY);
      setPhotoID(id)
      setShowModal(true)
  }

  const linkToProfile = () => {
    navigate(`/profile/${username}`)
  }

  return (
    <div className="grid-image relative rounded-md w-[100%] h-auto group duration-200 overflow-hidden cursor-pointer" onClick={handleClick}>
        <img className='object-cover rounded-md w-full h-full grid-main-image'
         src={regular} 
         alt="/"/>

        <div className="absolute bottom-0 translate-y-[100%] left-0 flex justify-around items-center w-full
         bg-black bg-opacity-80 text-white p-4 rounded-b-md md:group-hover:translate-y-0 duration-200" 
          onClick={linkToProfile}>
            <p className='text-white'>{username}</p> 
            <img src={profile_picture} alt="" className="w-10 h-10 rounded-full" />
        </div>
    </div>
  ) 
}


export default Image
 
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';



 const Modal = () => {
  const {showModal, setShowModal, photoID} = useGlobalContext();

  const [loading, setLoading] = useState(true)
  const [currentImage, setCurrentImage] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getImage();
  }, [photoID])

  
 const getImage = async() => {
  
  setLoading(true)
  try{
    
    const response = await fetch(`https://api.unsplash.com//photos/${photoID}?client_id=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();

    console.log(data)
     const {urls:{regular: image}, user:{username, profile_image:{medium: profile_picture}}, tags, description, alt_description} = data;
     setCurrentImage({image, username, profile_picture, tags, description, alt_description})
     setLoading(false)
    
  } catch(error) {
    console.log(error)
  }
 }

 const handleClick= () => {
  setShowModal(false)
  navigate(`/profile/${currentImage.username}`)
 }

 const handleExit = () => {
  setShowModal(false)
 }



  return (
    <div id="image-modal" className={`${showModal ? 'block': 'hidden'} sticky min-h-full md:fixed top-0 left-0 md:min-h-screen h-auto w-screen
     bg-black bg-opacity-80 dark:bg-opacity-90 z-10 flex justify-center items-center py-20`}>
        <button className="absolute top-3 right-3 text-white text-3xl" onClick={handleExit}><FaTimes/></button>

        <div className="grid md:grid-cols-2 gap-6 bg-white dark:bg-[#222] dark:text-white text-black max-w-[900px] w-[900px] p-6 rounded-md">

          <div className='relative'>
             {loading ? <div className="skeleton-loader rounded-md min-h-[400px]"></div> :
              <img src={currentImage.image} alt="/" className='modal-image max-w-full min-w-full rounded-md shadow-lg'/>}
          </div>

          <div className="flex flex-col overflow-auto">
              <div className="flex space-x-4 items-center mb-5 w-10 h-10 border-[2px] border-gray-200 rounded-full">
                  {loading ? <div className="skeleton-loader rounded-full min-w-full max-w-full h-full"></div> : <img src={currentImage.profile_picture} alt="/" className='min-w-full max-w-full h-full rounded-full shadow-xl'/>}
                  <p className='cursor-pointer' onClick={handleClick}>{currentImage.username}</p>
              </div>

              <p>{currentImage.description || currentImage.alt_description}</p>

              <div className="flex space-x-3 mt-5">
                
              </div>
          </div>
        </div>
    </div>
  )
}

export default Modal

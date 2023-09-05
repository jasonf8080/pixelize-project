import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User, Modal } from '../components';

import { useGlobalContext } from '../context';
import { handleBlur } from '../helpers';
import Photos from '../components/Photos';
 
const Profile = () => {

     const {showModal, setShowModal} = useGlobalContext();
 
     const {username} = useParams();
   
     const [images, setImages] = useState([]);
     const [loading, setLoading] = useState(false);
     const [page, setPage] = useState(1)

     //Request will not return totalPages, instead will provide the exact amount of photos
     const [totalPhotos, setTotalPhotos] = useState(null)
     
     const url = `https://api.unsplash.com//users/${username}/photos?client_id=${process.env.REACT_APP_API_KEY}&page=${page}&per_page=10`

     const fetchPhotos = async() => {
           setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();

            if(page > 1){
               setImages([...images, ...data])
            } else {
               setImages(data)
            }
            
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
     }

     const nextPage = () => {
        setPage(page + 1)
     }

     useEffect(() => {
        const images = document.querySelectorAll('.grid-main-image')
        handleBlur(images)
     }, [images])


     useEffect(() => {
        fetchPhotos();
     }, [page])


  useEffect(() => {
    window.scrollTo(0, 0)
    setShowModal(false)
  }, [])

  return (
  <>
    {showModal && <Modal/>}
     <User totalPhotos={totalPhotos >= 50 ? 50 : totalPhotos} setTotalPhotos={setTotalPhotos}/>
     <div className={`${showModal ? 'hidden' : 'block'} md:block`}>
       <Photos loading={loading} images={images} page={page} nextPage={nextPage} totalPages={totalPhotos >= 50 ? 5 : Math.ceil(totalPhotos / 10)} />
     </div>
   </>
  )
}

export default Profile
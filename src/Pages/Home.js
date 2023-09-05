import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { Modal, Photos, Categories, Searchbar } from '../components'
import { handleBlur } from '../helpers'



const Home = () => {

    const {showModal, setShowModal, queryObject, setQueryObject, pagePosition, setPagePosition} = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
   
   const url = `https://api.unsplash.com//search/photos/?client_id=${process.env.REACT_APP_API_KEY}&page=${page}&query=${queryObject.query}&orientation=squarish&per_page=10`;
    
    const fetchImages = async() => {
      
      setShowModal(false)
      setLoading(true)
        try {
          const response = await fetch(url);
          const data = await response.json();

           if(queryObject.newQuery){
            console.log('NEW SEARCH')
            setPage(1)
            setImages(data.results)
            setTotalPages(data.total_pages);
          } 


          if(!queryObject.newQuery){
            console.log('CHANGE PAGE')
            setImages([...images, ...data.results])
          }


          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
    }
    

    //Fetch Images when query or page changes
    useEffect(() => {
        fetchImages();
    }, [queryObject.query, page])

     //Handle image loading with blurry images
    useEffect(() => {
        const images = document.querySelectorAll('.grid-main-image')
        handleBlur(images)
    }, [images])



    const nextPage = () => {
      setQueryObject({...queryObject, newQuery: false})
      setPage(page + 1);
    }



    useEffect(() => {
      if(!showModal){
          window.scrollTo(0, pagePosition)
          setPagePosition(null)
      }
    }, [showModal])

  
  return (
    <>
    <div className={`${showModal ? 'hidden' : 'block'} md:block`}>
      <Categories/>
      <Searchbar/>
      <Photos loading={loading} images={images} page={page} nextPage={nextPage} totalPages={totalPages}/>
   </div>
    {showModal && <Modal/>}
   </>
  )
}


export default Home
import React, { useEffect, useState, useContext } from "react";



const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [pagePosition, setPagePosition] = useState(null)

    const [queryObject, setQueryObject] = useState({
      tempQuery: '',
      query: 'scenic',
      newQuery: true
    })

   const [photoID, setPhotoID] = useState('');


    //HANDLE MODAL
      const handleModal = () => {
      if(showModal){
        document.body.className = 'modal-true'
      } else {
        document.body.className = null;
      }
    }

    useEffect(() => {
      handleModal();
    }, [showModal])



    return <AppContext.Provider value={{
       handleModal,
      showModal, setShowModal,
      activeCategory, setActiveCategory,
      photoID, setPhotoID,
      queryObject, setQueryObject, 
      pagePosition, setPagePosition
      }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}


//if((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2){
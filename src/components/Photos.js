import React from 'react'
import Loading from './Loading';
import Image from './Image';

const Photos = ({loading, images, page, totalPages, nextPage}) => {
  return (
    <section id="images" className='mt-6 max-w-7xl mx-auto px-5 md:px-10 pb-20'>
      {loading ? <Loading/> : 
      <>
      {images.length > 0 ?
      <>
      <div id="images-grid" className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense mt-4' >
        {images.map((image, index) => {
          return <>
            <Image key={index} {...image} />
          </>
        })}
      </div>

      <button className={`${page > 5 || page === totalPages || loading ? 'hidden' : 'block'}
       bg-secondary-color dark:bg-main-color mx-auto mt-10 px-8 py-3 text-white block uppercase rounded-md`}
        onClick={nextPage}>Load More
      </button>
      
      </>
      :
      <h2 className='text-center min-h-[30vh] flex justify-center items-center'>Sorry No Results Matched Your Search</h2>
    }
</>
      }
   </section>
  )
}

export default Photos
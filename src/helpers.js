export const handleBlur = (images) => {
     let options = {};
    
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if(!entry.isIntersecting) return;
          const image = entry.target;
          const newURL = entry.target.getAttribute('src').replace("&w=10", "&w=900");

          image.src = newURL;

          observer.unobserve(image)
      })
    }, options);
    
    images.forEach((image) => {
      observer.observe(image)
    })

}
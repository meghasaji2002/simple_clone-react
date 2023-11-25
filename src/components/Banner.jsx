import React from 'react'

import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <div style={{width:'100%',height:'500px',paddingLeft:'50px',paddingRight:'50px',backgroundColor:'black'}} >
      <div >
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
          alt=""
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          
          src="https://indiaglitz-media.s3.amazonaws.com/telugu/home/jigarthanda-double-x-review-1.jpg"
          alt=""
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg"
          alt=""
        />
       
      </Carousel.Item>
    </Carousel>
    </div>

    
        
    </div>
  )
}

export default Banner
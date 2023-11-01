import React from 'react'

const Home = () => {
  return (
    <>
        <div className="video-container absolute top-0 left-0 z-[-10]">
          <video className=" h-screen w-screen object-cover" preload="auto" muted loop autoplay="true">
            <source  
              data-src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4" data-object-fit="true" src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4" data-loaded="true"
              type="video/mp4"
            />
          </video>
        </div>
    </>
  )
}

export default Home
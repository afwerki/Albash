import React from 'react'
import videoBG from '../images/videoBG.mp4'
import './videoBG.css'

const VideoBack = () => {
  return (
    <div className='main'>
        <div className="overlay">
            
        </div>
        <div className="text">
            <h1>this is text</h1>
            
        </div>
     <video src={videoBG} autoPlay loop muted/>
     <div className='content'>

     <h1>Welcome</h1>
     <p>to my site</p>
     </div>
    </div>
  )
}

export default VideoBack
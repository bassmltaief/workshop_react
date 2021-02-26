import React from 'react'

const MainVideo = () => {
    return (
        <div className="col-md-7">
        <iframe 
        width="852" height="480" 
        src="https://www.youtube.com/embed/M2OyRnysdKs?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW" 
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen></iframe>
         <h4>( React Js Tutorial ) Virtual DOM and how it works ?</h4>
        </div>
    )
}

export default MainVideo

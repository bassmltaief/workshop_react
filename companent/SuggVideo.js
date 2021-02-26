import React from 'react'
const suggestionList = [
    {
        title: 'Learn Flexbox In 20 Minutes | Learn HTML & CSS | Flexbox Tutorial',
        src: 'https://www.youtube.com/embed/FTlczfR82mQ'
    },
    {
        title: 'React Tutorial For Beginners',
        src: 'https://www.youtube.com/embed/dGcsHMXbSOA'
    },
    {
        title: 'Top 10 CSS Tricks You Didn t Know!',
        src: 'https://www.youtube.com/embed/CxC925yUxSI'
    },
    {
        title: "Top 10 Javascript Tricks You Didn't Know!",
        src: 'https://www.youtube.com/embed/mNJ06S60B9k'
    },
    {
        title: 'Async Javascript Tutorial For Beginners (Callbacks, Promises, Async Await).',
        src: 'https://www.youtube.com/embed/_8gHHBlbziw'
    },
]

const SuggVideo = () => {
    return (
        <div className="col-md-5" style={{marginLeft:'880px',marginTop:'-450px'}}>
        <div className="sugg">
        {suggestionList.map((video,index)=><div className="row mt-2"  key={index}>
        
            <iframe className="col-md-7" 
            
        src={video.src} 
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen></iframe>
         <h6 className="col-md-3">{video.title}</h6>
            </div>)}
        </div>
        </div>
    )
}

export default SuggVideo

import React from 'react'
const commentList = [
    {
        name: 'Emna',
        body: "   This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!"
    },
    {
        name: 'Mohamed',
        body: "   This morning I was looking for Promises, and your notification poped up. This must be some sign :D"
    },
    {
        name: 'Ahmed',
        body: "   Seeing Sweet Anita in your recommendations definitely caught me off guard lmao"
    },
    {
        name: 'Houssem',
        body: "   Me: Ah, I too am a man of culture"
    },
    {
        name: 'Ghassen',
        body: "   This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!"
    },
    {
        name: 'Khalil',
        body: "   This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!"
    },
]

const Comman = () => {
    return (
        <div>
        {commentList.map((el,index)=><div key={index}>
            <h3>{el.name}</h3>
            <h6 style={{marginLeft:'20px'}}>{el.body}</h6>
            </div>)}
        </div>
    )
}

export default Comman

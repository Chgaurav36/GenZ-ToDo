import React, {useRef}from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);
    const data = [
        {
            desc: "I have created my first task on my new application",
            fileSize: "1.2mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "I have created my first task on my new application",
            fileSize: "1.2mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "I have created my first task on my new application",
            fileSize: "1.2mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        }
]
  return (
    
    <div ref={ref} className='fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap'>
        {data.map((item, index) =>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
    
  )
}

export default Foreground

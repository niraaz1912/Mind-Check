import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../styles/strategies.css'
function Videos() {
  const {detail} = useOutletContext()
  const tipElements = detail.videos.map((video, index)=>
  <li key={index} className='content'>
    <a href={`${video.url}`} target="_blank" rel="noopener noreferrer" className='external-link'>
      {video.title } 
    </a>
    <div className='clip-icon'>🔗</div>
  </li>)
  return (
    <section className='strategies-container'>
      
      <h3>{detail.category === 'Normal'? "How to maintain a happy life":`Here is a few tips for ${detail.category}`}</h3>
      <ul>
        {tipElements}
      </ul>
      
    </section>
  )
}

export default Videos
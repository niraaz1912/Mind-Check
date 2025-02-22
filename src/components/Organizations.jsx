import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../styles/strategies.css'
function Organizations() {
  const {detail} = useOutletContext()
  const {links }= detail
  const tipElements = links.map((link, index)=>
  <li key={index} className='content'>
    <a href={`${link.url}`} target="_blank" rel="noopener noreferrer" >
      {link.title}
    </a>
    🔗
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

export default Organizations
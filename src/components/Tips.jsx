import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../styles/strategies.css'
function Tips() {
  const {detail} = useOutletContext()
  const tipElements = detail.tips.map((tip, index)=><li key={index} className='content'>{tip}</li>)
  return (
    <section className='strategies-container'>
      
      <h3>{detail.category === 'Normal'? "How to maintain a happy life":`Here is a few tips for ${detail.category}`}</h3>
      <ul>
        {tipElements}
      </ul>
      
    </section>
  )
}

export default Tips
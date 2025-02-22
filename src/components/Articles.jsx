import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../styles/strategies.css'
function Articles() {
  const {detail} = useOutletContext()
  const tipElements = detail.articles.map((article, index)=>
  <li key={index } className='content'>
    <a href={`${article.url}`} target="_blank" rel="noopener noreferrer">
      {article.title}
    </a>
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

export default Articles
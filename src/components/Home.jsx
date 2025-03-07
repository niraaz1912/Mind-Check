import React, { useState } from 'react'
import '../styles/homepage.css'
import Intro from './Intro'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { postFeelingInfo } from '../utils/api';
function Home() {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const handleChange = (event) => {
        setText(event.target.value); // Update state with input value
      };
    const handleSubmit = ()=>{
        console.log(text)
        //const data = postFeelingInfo(text)
        //console.log(data);
        navigate(`/strategies?category=${text}`)
    }
    return (
    <div className='main-content'>
        <section className='input-section'>
            <h2>Tell us how you feel</h2>
            <input className='feeling-input-box' placeholder='Start here...' type="text" onChange={handleChange}></input>
            <button className='submit-button' onClick={()=>handleSubmit(text)} disabled={text?false:true}>Submit</button>
        </section>
    </div>
  )
}

export default Home
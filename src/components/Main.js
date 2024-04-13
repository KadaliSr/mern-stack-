import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'


export default function Main() {
    const inputRef=useRef(null)
  return(
    <div className='container'>
          <h1 className='title-text-light'>Quiz Application</h1>
                <ul>
                     <li> you will asked be 10 questions one after another.</li>    
                </ul>

                <form id="form">
                <input  ref={inputRef}  className="userid"type="text" placeholder='Username'></input>
                </form>

                <div className='start'>
    
                   <Link className='btn' to={'quiz'}>start Quiz</Link>
                </div>
        </div>
    )
}
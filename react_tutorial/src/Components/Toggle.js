import React, { useState } from 'react'
import css from "./Toggle.css"

const Toggle = () => {
    const [show,setShow]=useState(false);
    let heading="heading1";
    let para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  return (
    <div className='container'>
      <div className='btnContainer'>
        <button className='btnOpen'   onClick={()=>setShow(!show)}>Open</button>
      </div>
        {
          show && 
          <div className='box'> 
            <h1 className='heading'>{heading}</h1>
            <p className='para'>{para}</p>
            <button className='btnClose' onClick={()=>setShow(false)}>Close</button>   
         </div>
        }
         
    </div>
  )
}

export default Toggle
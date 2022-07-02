import React, { useState } from 'react';
import tut from "./tut.css";

const Tut = () => {
  const [name,setName]=useState(false);
  const [changeBtn,setChangeBtn]=useState(false)
  // const handleChange = () => {
    // if(name=="zaid siddiqui"){
    //   setName("saif Sidiuqi")
    //  }
    //  else{
    //   setName("zaid siddiqui")
    //  }'
    // setName(!name)
  // }
  return <div>
  <div className='name'>
    <h1 className='input'>
      {
        name?"Zaid Siddiqui":"Saif Siddiqui" 

      }
    </h1>
  </div>
  <br></br>
  <button className='btn' onClick={()=> setName(!name) }>  Click me</button>
  </div>;
};

export default Tut;

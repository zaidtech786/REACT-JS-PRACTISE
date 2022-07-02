import React, { useState } from 'react';

const Practise = () => {
  let initialData=0;
  const [text,setText]=useState(initialData);


  return (
      <>
        <h1 className='input'>{text}</h1>
        <button className='incBtn' onClick={ () => setText(text+1) }>INC</button>
        <button className='decBtn' onClick={ () => text<1? setText(0):setText(text-1) }>DEC</button>
      </>
  )
};

export default Practise;

import React,{useState} from 'react';
import data from "./Data";
import review from "./review.css";


const Review = () => {
    const [index,setIndex]=useState(0);
    let {id,name,img,role,info}=data[index];
     
    const prevPerson = () => {
        setIndex((index+1)%data.length);
    }
    const nextPerson = () => {
        setIndex((index-1 +data.length )%data.length);
    }

  return <>
<article className='review'>
      <div className='img-container'>
        <img src={img} alt={name} className='person-img' />
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{role}</p>
      <p className='info'>{info}</p>
      <div className='button-container'> 
       <button className='prev-btn' onClick={prevPerson}>
          prev
        </button>
        <button className='next-btn' onClick={nextPerson}>
         next
        </button>
      </div>
      {/* <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button> */}
    </article> 
  </>;
};

export default Review;

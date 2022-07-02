import React,{useState} from 'react';

const TimeEvent = () => {
  let date=new Date();
  let getWaqt=date.toLocaleTimeString();
   const [time,setTime]=useState(getWaqt);

   const Time = () => {
     let newTime=new Date().toLocaleTimeString();
    setTime(newTime);
   }
   setInterval(Time,1000);
  return <>

   <h1>{time}</h1>
   <button className='btn'>Get Time</button>
  
  </>;
};

export default TimeEvent;

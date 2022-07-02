import React,{useState} from 'react'
import Bg from "./Bg.css"

const BgChanger = () => {
    const [colors,setColors]=useState(['red','blue','green','black','orange','purple','grey','violet','burgendy',]);
    const [change,setChange]=('')
    const ChangeColor = () => {
        console.log("Heelo")
      
        const random=Math.round(Math.random()*colors.length);
        // setColors(random)
        console.log(setChange(random))
      
    }
    
  return (
    <div className='bgContainer'>
        {change}
        <button onClick={()=>ChangeColor()}>Click Me</button>
    </div>
  )
}

export default BgChanger
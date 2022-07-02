import React,{useState} from 'react'

const BtnToggle = () => {
    const [changeBtn,setChangeBtn]=useState(false)
    const [text,setText]=useState(false)
    const [type,setType]=useState(false)
  return (
    <div>
        <h2>{text ? "Zaid Siddiqui ": "Saif Siddiqui"}</h2>
        <button onClick={()=>setChangeBtn(!changeBtn)}>
        {
        changeBtn?"Close":"Open"
        }
        </button>
        <button onClick={()=>setText(!text) }>Change Text</button>

       <div>
       <input type={type?"text":'password'}></input>
       <button className='btnm' onClick={()=>setType(!type)}>Change type</button>
       </div>
    </div>
  )
}

export default BtnToggle
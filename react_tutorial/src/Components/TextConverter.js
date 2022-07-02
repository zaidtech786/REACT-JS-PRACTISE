import React,{useState} from 'react'

const TextConverter = () => {
    const [convertText,setConvertText]=useState(false)
    const [input,setInput]=useState('');
    const [changeBtn,setChangeBtn] = useState(false)
    console.log(input);

    const ConvertFunc = () => {
        setConvertText(!convertText);
        convertText?setInput(input.toUpperCase()):setInput(input.toLowerCase())
        setChangeBtn(!changeBtn)

    }
  return (<>
 
    <div className='container'>
        <textarea cols="90" row="90" value={input} onChange={(e)=>setInput(e.target.value)}> 
      
         </textarea>
        
    </div>
    <button className='btnnn' onClick={()=>ConvertFunc()}>{changeBtn?'UpperCase':'LowerCase'}</button>
    </>
  )
}

export default TextConverter
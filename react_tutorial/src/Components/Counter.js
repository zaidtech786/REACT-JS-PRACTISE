import React,{useState} from 'react'

const Counter = () => {
  const [input,setInput]=useState('');
  const [char,setChar]=useState('0')
  const [word,setWord]=useState('0')
  console.log(input)
  const Style={
    width:'300px',
    height:"200px",
    resize:"none",

  }


  const ConvertText = (e) => {
    setInput(e.target.value);
    console.log(input);

     setChar(input.length)

    let words=input.split(" ");
    let filterWords= words.filter( (val) => {return  val!=""});
    setWord(filterWords.length)




  }
  return (
    <div style={{width:"100%",height:"100%",marginTop:"100px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>Word Counter</h1>
      <textarea style={Style} value={input} onChange={(e)=>ConvertText(e)}> </textarea>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <span style={{marginTop:"0px",marginRight: "30px"}}>Char:{char}</span>
      <span>Word:{word}</span>
      </div>

    </div>
  )
}

export default Counter
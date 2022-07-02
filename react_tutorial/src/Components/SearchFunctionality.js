import React,{useState} from 'react'

const SearchFunctionality = () => {
    const [search,setSearch]=useState("");
    console.log(search)


    const [data,setData]=useState([
        {
            name:"zaid siddiqui"
        },
        {
            name:"Saif siddiqui"
        },
        {
            name:"salman siddiqui"
        },
        {
            name:"faiz siddiqui"
        },
        {
            name:"rizwan siddiqui"
        },
    ])
  return (
    <div>
        <input type={search} onChange={(e) =>{setSearch(e.target.value)} }/>
       {
        data.filter( (val) => {
           if(search==""){
            return val;
           }
           else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val;
           }
        }).map( (curElem,index)=>{
            return(
               <div key={index}>
                   <h4>{curElem.name}</h4>
               </div>
            )
        })
       }
    </div>
  )
}

export default SearchFunctionality
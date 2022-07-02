import React,{useState} from 'react';
import css from "./Menu.css"
import Lunch from "./Images/lunch.jpg";
import MenuData from "./menuData"

const MenuItems = () => {
    const [data, setData]=useState(MenuData);

    const fetchData = (category) => {
        if(category==="all"){
            setData(MenuData)
            return;
        }
        const filterData = data.filter( (items)=>items.category===category)
        setData(filterData)
      
    
        console.log(filterData)
    }

  return (
    <div className='wrapper'>
     <div className='btnContainer'>
        <button className='button all' onClick={()=>fetchData("all")}>All</button>
        <button className='button BreakFast' onClick={()=>fetchData("BreakFast")}>BreakFast</button>
        <button className='button Lunch' onClick={()=>fetchData("lunch")}>Lunch</button>
        <button className='button Dinner' onClick={()=>fetchData("dinner")}> Dinner</button>
     </div>

     <div className='menuContainer'>
        {
            data.map( (curElem) => {
                const {id,image,name,price,text}=curElem;
                return (
                    <div className='menu' key={id}>
                    <div className='space'>
                    <img src={image} alt="Lunch"/>
                    <div className='list'>
                        <div className='dishName'>{name}</div>
                        <div className='price'>{price}</div>
                    </div>
                    </div>
                    <div className='absolute'>
                    <p className='paragraph'>{text}</p>
                    </div>
                </div>
                )
            })
        }
        
       
     </div>


    </div>
  )
}

export default MenuItems
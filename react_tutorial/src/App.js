
import './App.css';
import Practise from "./Components/Practise";
import Tut from "./Components/Tut";
import Review from "./Components/Review";
// import GetData from "./Components/Displaymenu/GetData";
import TimeEvent from "./Components/TimeEvent";
// import Code from "./Components/typingWeb/Code";
import Navbar from "./Components/Router/Navbar";
import { Route,Routes}
        from "react-router-dom";
import Home from "./Components/Router/Home";
import Services from "./Components/Router/Services";
import About from "./Components/Router/About";
import Contact from "./Components/Router/Contact";
// import GetData from "./Components/DisplayMenu/GetData";
import Toggle from './Components/Toggle';
import BtnToggle from './Components/BtnToggle';
import Counter from './Components/Counter';
import MenuItems from './Components/MenuItems';
import MenuData from './Components/menuData';
import SearchFunctionality from './Components/SearchFunctionality';
import Todo  from './Components/TodoList/Todo';
import BgChanger from './Components/BgChanger';
import TextConverter from './Components/TextConverter';

   const App = () => {
    return (
      <>
      <Counter/>
        {/* <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes> */}
      </>
    );
   }


export default App;

import React,{useState} from 'react'
import Header from "./Header";
import Menu from './Menu'
import {BrowserRouter as Router, Route } from "react-router-dom";
import Playeras from "./Playeras";
import Home from './Home';
import MenuMobil from "./MenuMobil";


const App =()=>{

  const[isHideMenu, setIsHide] = useState(true);

  const hideMenu = () => {
    setIsHide(!isHideMenu)
  };
  

return(

  <Router >
    <div className='main'>
      <div className='menu2'> <Menu /></div> 
      <Header isHideMenu={isHideMenu} hideMenuEvent={hideMenu} />
      <Route  path='/' component={!isHideMenu ? MenuMobil : null} />
      <Home img="https://cdn.luxe.digital/media/2021/01/01184416/best-men-sneakers-2021-designer-review-luxe-digital%402x.jpg"/>
      <Playeras/>
      <Playeras/>
      <Home  img="https://www.myoutfie.com/historias/wp-content/uploads/2020/06/2.png"/>
      <Playeras/>
      <Playeras/>
      <Home img='https://cdn.shopify.com/s/files/1/2278/7763/products/JAKE_BLACK_2048x2048.jpg?v=1550619627'/>
      <Playeras/>
      <Playeras/>
   </div>
  </Router>
)
}

export default App;


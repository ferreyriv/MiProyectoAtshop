import React,{useState} from 'react'
import Header from "./Header";
import Menu from './Menu'
import {BrowserRouter as Router, Route } from "react-router-dom";
import Playeras from "./Playeras";
import Home from './Home';
import MenuMobil from "./MenuMobil";
import Pantalones from './Pantalones';
import Accesorios from './Accesorios';


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
      <Home img="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
      <Playeras/>
      <Pantalones/>
      <Home  img="https://images.unsplash.com/photo-1565127453543-ad97bbbba30d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
      <Playeras/>
      <Pantalones/>     
      <Home img='https://images.unsplash.com/photo-1506169894395-36397e4aaee4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'/>
      <Accesorios/>
      <Accesorios/>
   </div>
  </Router>
)
}

export default App;


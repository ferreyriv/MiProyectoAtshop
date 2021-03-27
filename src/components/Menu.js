import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import {Link,Redirect,Route} from "react-router-dom";
import Accsesorios from './ListadeAccesorios';
import Ropa from "./Ropa";


const Menu = (props) => {

   
    const[Mujer,setMujer]=useState(false) 

    
    const listademujer =()=>{
        if(Mujer){
        return(
            <div>
            <Link  to='/' ><Button > <div className='Promociones'>Promociones 50%</div></Button> </Link>
            <br/>
                <Ropa/>
             <br/>
            <Accsesorios/>
            
             <br/>
             <Link  to='/'><Button>Zapatos</Button></Link>
           
            </div>
                
        )}
    }
    const[Hombre,setHombre]=useState(false) 
    
    const listadeHombre =()=>{

        if(Hombre){
        return(
            <div>
            <Link to='/' ><Button><div className='Promociones'>Promociones 50%</div> </Button> </Link>
            <br/>
            <Ropa/>
             <br/>
             <Accsesorios/>
             <br/>
             <Link  to='/'><Button>Zapatos</Button></Link>
         
            </div>
                
        )}
    }

    return (
        
       <div className='cubito'>

            <p className='encabezado'>ATSHOP</p>
            <div className='Genero'>
                <Button
                onClick={()=>setHombre(!Hombre&&!Mujer)}
                className='Genero'><h3>Hombre</h3>
                <br/>
                </Button>
                {listadeHombre()}
                <br></br>
                <Button className='Genero' onClick={()=>setMujer(!Mujer && !Hombre)}><h3>Mujer</h3>
                
                </Button>
                {listademujer()}  

            </div>
              
                
       </div> 
    )
}

export default Menu

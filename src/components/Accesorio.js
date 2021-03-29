import React from 'react'
import PropTypes from "prop-types";

const Accesorio = (props) => {

    return (
    
        <div className='Producto'>
            
            <h3 className='nombreProducto'> 
                    {props.name}
                    
                </h3>
           
                <div className='Imagen'><img src={props.img} alt={props.name}/></div>
                <h1>$23</h1>   

        </div>
    )
}
Accesorio.protoTypes={
    img: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired

}
export default Accesorio

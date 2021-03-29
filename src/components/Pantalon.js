import React from 'react'
import PropTypes from "prop-types";

const Pantalon = (props) => {

    return (
    
        <div className='Producto'>
            
            <h2 className='nombreProducto'> 
                    {props.name}
                    
                </h2>
           
                <div className='Imagen'><img src={props.img} alt={props.name}/></div>
                <h3>$23</h3>   

        </div>
    )
}
Pantalon.protoTypes={
    img: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired

}
export default Pantalon

import React from 'react'
import PropTypes from "prop-types";

const Pantalon = (props) => {

    return (
    
        <div className='Pantalon'>
            
            <h3 className='nombreProducto'> 
                    {props.name}
                    
                </h3>
           
                <div className='Imagen'><img src={props.img} alt={props.name}/></div>


        </div>
    )
}
Pantalon.protoTypes={
    img: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired

}
export default Pantalon

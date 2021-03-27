import React from 'react'
import PropTypes from "prop-types";

const Playera = (props) => {

    return (
    
        <div className='Playeras'>
            
            <h3 className='nombreProducto'>
                    {props.name}
                    
                </h3>
           
                <div className='Imagen'><img src={props.img} alt={props.name}/></div>


        </div>
    )
}
Playera.protoTypes={
    img: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired

}
export default Playera

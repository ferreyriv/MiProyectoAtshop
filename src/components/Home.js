import React from 'react'
import PropTypes from "prop-types";

const Home = (props) => {
    return (
        <div className='Home'>
            <div className='Imagen'>
                <img src={props.img} alt="portada"/>
            </div>
        </div>
    )
}
Home.protoTypes={
    img: PropTypes.string.isRequired,
    titulo:PropTypes.string.isRequired

}

export default Home

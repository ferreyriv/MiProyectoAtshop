import { Button } from '@material-ui/core'

import React, { useState } from 'react'

const Ropa = () => {
    const[ropa,setRopa]= useState(false)

    const listadeRopa=()=>{
    if(ropa){
    return(
            <div>
                <div>
                    Playeras
                </div>
                <div>
                    Camisas
                </div>
                <div>
                    Pantalon
                </div>
                <div>
                    Chamarras
                </div>
                <div>
                    Bermudas
                </div>
            </div>
    )
    }
}
    return (
        <div>
        <Button
        onClick={()=>setRopa(!ropa)}
        >Ropa</Button>
        {listadeRopa()}
       </div>
    )
}

export default Ropa

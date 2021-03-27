import { Button } from '@material-ui/core'

import React, { useState } from 'react'

const Accsesorios = () => {
    const[accs,setAccs]= useState(false)

    const listadeAccsesorios=()=>{
    if(accs){
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
        onClick={()=>setAccs(!accs)}
        >Accesorios</Button>
        {listadeAccsesorios()}
       </div>
    )
}

export default Accsesorios

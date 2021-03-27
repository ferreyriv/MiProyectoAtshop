import { Grid } from '@material-ui/core'
import React from 'react'
import Pantalones from './Pantalon'
import Playera from './Playera'


const Playeras = () => {
    return (

           <Grid container className='Aparador' >
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}> <Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/> </Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='http://itgetsbetter.mx/wp-content/uploads/2017/06/playera.jpg'/></Grid>
           </Grid>

    )
}

export default Playeras

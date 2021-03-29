import { Grid } from '@material-ui/core'
import React from 'react'
import Playera from './Playera'


const Playeras = () => {
    return (
        <div className='Aparador'>
           <Grid container  >
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/> </Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
               <Grid item className='griditem'xs={6} sm={3} md={3}><Playera name='Playera' img='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'/></Grid>
           </Grid>
           </div>
    )
}

export default Playeras

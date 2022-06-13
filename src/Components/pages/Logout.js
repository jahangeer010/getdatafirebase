import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import Appbar from '../Appbar'
export default function Logout() {
   
    return (
        <>
        
        <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Box sx={{display:"flex",justifyContent:"center",alignContent:"center", height:"100vh" , marginTop:"10px"}}>
     

        <Card sx={{ maxWidth: 345}}>
        <Typography variant="h5" sx={{color:'Green'}}>Thanyou for Viewing Asignment by Syed Jahangeer </Typography>
        <CardMedia sx={{borderRadius:20}}
            component="img"
            height="400"

            image="https://www.funimada.com/assets/images/cards/big/thank-you-2.gif"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingLeft:10}}>
                You are Logout From Dashboard 
            </Typography>
        
        </CardContent>
        <CardActions>
            <Button size="small">    <Typography><NavLink to='../Login' style={{textDecoration:'none'}}>Click to Login Again</NavLink></Typography></Button>
                    
        </CardActions>
    </Card></Box></Grid></Grid></>
    );
}

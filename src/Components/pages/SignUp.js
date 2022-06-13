import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SMbutton from "../button"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SMInput from '../input';
import { NavLink } from 'react-router-dom';
import Appbar from '../Appbar'
import { useState } from 'react';
import {sendData, signUpUser} from '../../config/firebase/firebasemethods'
import {useNavigate}from 'react-router-dom'

export default function SignUp() {
   const [userObj,setUserObj]=useState({})   
   const [loader,setLoader]=useState(false)
   const navigate=useNavigate();
  
 let onPress=()=>{
    
     if(!userObj.email){
   
      return;
  }
  if(!userObj.password||userObj.password.length<6){
      return"Password Required and Password must be greater than 6 characters"
  }
  setLoader(true)
  signUpUser(userObj).then((res)=>{
      console.log(res)
      
      setLoader(false)   
      navigate(`/login`);
      sendData(userObj,'users',res.user.uid).then(()=>{
        console.log("successfully saved ")
      })
    //   navigate(`/login`);    

    }).catch((err=>{
        console.log(err)
        setLoader(false)   

    }));
}
    return (
        <>
        
        <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Box sx={{display:"flex",justifyContent:"center",alignContent:"center", height:"100vh" , marginTop:"10px"}}>
     

        <Card sx={{ maxWidth: 345}}>
        <Typography variant="h5" sx={{color:'Green'}}>Enter Details to SignUp </Typography>
        
         <CardMedia 
            component="img"
            height="200"

            image="/images/signup.jpg"
            alt="green iguana"
        />
        <CardContent> 
            <Typography gutterBottom variant="h5" component="div" sx={{paddingLeft:10}}>
            SignUp
            </Typography>
            <Typography variant="body2" color="text.secondary">
                
        <SMInput onChange={(e)=>setUserObj({...userObj,name:e.target.value})} type="text" label="Enter Name"/>
            
            </Typography>
            <Typography pt={2} variant="body2" color="text.secondary">
        
            <SMInput onChange={(e)=>setUserObj({...userObj,email:e.target.value})} type="text" label="Enter Email"/>
           
            </Typography>
            <Typography pt={2}>
            <SMInput  onChange={(e)=>setUserObj({...userObj,password:e.target.value})} type="password" label="Enter Password" />
           
            </Typography>
        </CardContent>
        <CardActions>
                 
            {/* <NavLink to='../Login'>onClick={()=>{onPress()}}<Typography>Login</Typography></NavLink> */}
            <SMbutton loading={loader} onClick={()=>onPress()} label="Sugn Up" variant="contained"/>
        </CardActions>
    </Card></Box></Grid></Grid></>
    );
}
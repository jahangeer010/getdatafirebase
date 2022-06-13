import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../config/firebase/firebasemethods'
import SMbutton from '../button'

import Login from './Login'

function Home() {
  const params=useParams();
  useEffect(()=>{
    if(params.id){
      getData("users")
    }
  },[])
  return (

    <div>
          
      </div>
  )
}

export default Home
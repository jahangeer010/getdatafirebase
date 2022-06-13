import React, { useEffect, useState } from 'react'
import { getData } from '../../config/firebase/firebasemethods'
import { useParams } from 'react-router-dom'



function WellcomeUser(props) {
  const {display,SetDisplay}=useState()
  const params=useParams();
  useEffect(()=>{
    if(params.id){
      getData()
      
    }
  },[])

  return (
    <div>Wellcome  and your password is{display} </div>
  )
}

export default WellcomeUser
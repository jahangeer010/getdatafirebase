// import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import app from "./firebaseconfig"
import {getDatabase,ref,set,onValue } from "firebase/database"
// Authentication methods 2022
const auth = getAuth(app);
const database=getDatabase(app);
// const [data,SetData]=useState([])
let signUpUser=(obj)=>{
 
   
  return  createUserWithEmailAndPassword(auth, obj.email, obj.password)


}

let logInUser=(obj)=>{
    
return signInWithEmailAndPassword(auth, obj.email, obj.password)
}


// Database methods
let sendData=(obj,nodeName,id)=>{
  // let reference=ref(database,nodeName+"/"+id?id:"");
  let reference=ref(database,`${nodeName}/${id?id:""}`);
    set(reference,obj);
      
}
function ShowData(){
//   let getData=(nodeName,id)=>{
//     const dbRef=ref(database,nodeName)
//   return onValue(
//     dbRef
//     , (snapshot)=>{
//       snapshot.forEach((childSnapshot)=>{
//         const childKey=childSnapshot.key;
//         const childData=childSnapshot.val();
//         const ArrayData=Object.keys(childData)
//     // console.log(ArrayData)
//     // document.write(ArrayData.map((e)=>{return(<><ul><li>{e}</li></ul></>)}))
//     // const numbers =ArrayData
//     console.log("Array>>"+ArrayData)
      
//       });
//     },{
//       onlyOnce:false
//     })
//     }
};
let getData=(nodeName,id)=>{
  const dbRef=ref(database,nodeName)
return onValue(
dbRef
, (snapshot)=>{
  snapshot.forEach((childSnapshot)=>{
    const childKey=childSnapshot.key;
    const childData=childSnapshot.val();
    const values=Object.entries(childData)
    const ArrayData=Object.keys(childData)
// console.log(ArrayData)

// document.write(ArrayData.map((e)=>{return(e)}))
// const numbers =Object.keys(ArrayData)
// console.log(ArrayData)
console.log(values)
const objectdata=values
console.log("this is obj"+objectdata[1])
document.write(values.map((e)=>{return("Values of Data: "+e+"<br/>" )}))
document.write(ArrayData.map((e)=>{return("Keys of Data: "+e+"<br/>" )}))

// document.write(numbers.map((e)=>{return(e)}))


// console.log("vallues>>"+numbers)
  
  });
},{
  onlyOnce:false
})
}
// export {signUpUser,signOut,logInUser,logOutUser,checkAuthUser} 
export {signUpUser,logInUser,sendData,getData}
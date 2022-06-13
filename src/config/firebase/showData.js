import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import app from "./firebaseconfig"
import {getDatabase,ref,set,onValue } from "firebase/database"
// Authentication methods 2022
const auth = getAuth(app);
const database=getDatabase(app);

let GetData=(nodeName,id)=>{
    const dbRef=ref(database,nodeName)
  return onValue(
  dbRef
  , (snapshot)=>{
    snapshot.forEach((childSnapshot)=>{
      const childKey=childSnapshot.key;
      const childData=childSnapshot.val();
      const ArrayData=Object.values(childData)
  // console.log(ArrayData)
  // document.write(ArrayData.map((e)=>{return(<><ul><li>{e}</li></ul></>)}))
  const numbers =ArrayData
  console.log(numbers)
    
    });
  },{
    onlyOnce:false
  })
  }
  export {GetData}
 
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsDhO3MCRR5itWPqmDvhvM3e1gTFHdzbo",
  authDomain: "reactapis010.firebaseapp.com",
  databaseURL: "https://reactapis010-default-rtdb.firebaseio.com",
  projectId: "reactapis010",
  storageBucket: "reactapis010.appspot.com",
  messagingSenderId: "394043833864",
  appId: "1:394043833864:web:b83f3b850045147fbb9bbd"
   // apiKey: "AIzaSyCPw-gpfP_QoBOfm1NGs8LTB068td8h_UQ",
  
  // authDomain: "classapp-56b58.firebaseapp.com",
  // projectId: "classapp-56b58",
  // storageBucket: "classapp-56b58.appspot.com",
  // messagingSenderId: "133182475934",
  // appId: "1:133182475934:web:ebe9ad920fc8fc14a5b58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const fireDb=firebase.initializeApp(firebaseConfig)
// export default fireDb.datbase().ref()
export default app
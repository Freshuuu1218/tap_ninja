import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDbqysOIouUwPAHkqGEE_B0z98eHgrI838",
    authDomain: "tapninja-6c4c5.firebaseapp.com",
    projectId: "tapninja-6c4c5",
    storageBucket: "tapninja-6c4c5.appspot.com",
    messagingSenderId: "667840904035",
    appId: "1:667840904035:web:8fbfad85e721b4170af156",
    measurementId: "G-QNLHQD5PZ3"
  };

  const app = initializeApp(firebaseConfig);
  // export app.database().ref() as databaseRef;
  export const auth = getAuth()
  export const db=getFirestore(app)
  export default app
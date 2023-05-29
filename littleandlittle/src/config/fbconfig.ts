import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDVCiHTJUYc5hjU9cMRkc1eUOEhbksgAbI",
  authDomain: "littleandlittle-e6369.firebaseapp.com",
  projectId: "littleandlittle-e6369",
  storageBucket: "littleandlittle-e6369.appspot.com",
  messagingSenderId: "964697565011",
  appId: "1:964697565011:web:11755ececca260b4ec23a6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



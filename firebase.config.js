// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszQMNHwD65lRMuGOW8RKqtOQyECaoD4Q",
  authDomain: "my-wonder-project-3f5d3.firebaseapp.com",
  projectId: "my-wonder-project-3f5d3",
  storageBucket: "my-wonder-project-3f5d3.appspot.com",
  messagingSenderId: "960817296618",
  appId: "1:960817296618:web:2873d33842b9ee8cb05393"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export{app}
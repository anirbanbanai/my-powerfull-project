// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKeys,
  authDomain: process.env.NEXT_PUBLIC_authDomains,
  projectId: process.env.NEXT_PUBLIC_projectIds,
  storageBucket: process.env.NEXT_PUBLIC_storageBuckets,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderIds,
  appId: process.env.NEXT_PUBLIC_appIds
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }
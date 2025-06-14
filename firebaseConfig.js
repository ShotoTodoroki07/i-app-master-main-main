// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDDuy6LqbpvWQ_E-yud69gBJuMUAzic-ME",
//   authDomain: "forward-byte-410703.firebaseapp.com",
//   projectId: "forward-byte-410703",
//   storageBucket: "forward-byte-410703.firebasestorage.app",
//   messagingSenderId: "283286585203",
//   appId: "1:283286585203:web:35c7503e9c37adfea80f06"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


export const app = initializeApp(firebaseConfig);

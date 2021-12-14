import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNCrvweZxw2Z1CVY65X91xqppgd9d3MfA",
  authDomain: "swe-hangtime.firebaseapp.com",
  projectId: "swe-hangtime",
  storageBucket: "swe-hangtime.appspot.com",
  messagingSenderId: "250473107873",
  appId: "1:250473107873:web:8893c0ad892ea8f17bfbe0",
  measurementId: "G-VBV7KKNCSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7XcQx0XB0WeSs5w9Ic1O1lTqF_km9Mbo",
  authDomain: "fir-todo-1434b.firebaseapp.com",
  projectId: "fir-todo-1434b",
  storageBucket: "fir-todo-1434b.appspot.com",
  messagingSenderId: "843288984764",
  appId: "1:843288984764:web:89febaad9f5fbfe435e4b9",
  measurementId: "G-59TEC46BKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

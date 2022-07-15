// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/compat/analytics";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import {getDatabase, ref, set, onValue, child, get} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRolOgHVIP4etC_Xqcl-2HLm06ohg6mcU",
  authDomain: "qwer-f9d8c.firebaseapp.com",
  databaseURL: "https://qwer-f9d8c-default-rtdb.firebaseio.com",
  projectId: "qwer-f9d8c",
  storageBucket: "qwer-f9d8c.appspot.com",
  messagingSenderId: "752461150798",
  appId: "1:752461150798:web:01278291d8701bd6cda11f",
  measurementId: "G-4PELH28L32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(category, nr, content, acontent, isTrue){
const db = getDatabase();
const reference = ref(db, 'questions/' + category) 

    set(reference, {
        nr: nr,
      content: content,
      acontent: acontent,
      isTrue : isTrue
    });
}

writeUserData('animals', 1, 'do dogs ...?', 2, true)
 

const dbRef = ref(getDatabase());
get(child(dbRef, `questions/astro/1`)).then((snapshot) => {  
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
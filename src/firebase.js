import firebase from 'firebase'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAOvXwX6PY45HD3nMBogcw4hiaiaHq4qM",
    authDomain: "sueca-vue.firebaseapp.com",
    databaseURL: "https://sueca-vue.firebaseio.com",
    projectId: "sueca-vue",
    storageBucket: "sueca-vue.appspot.com",
    messagingSenderId: "795497000896",
    appId: "1:795497000896:web:fb1330449b2d2a9792e225",
    measurementId: "G-3K29MJNM0Z"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const firestore = firebaseApp.firestore();

  export default firestore
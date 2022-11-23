import  firebase   from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyAXbPahz2d7Uqawqsh-UphP8NZQXHb_lIo",
  authDomain: "reduxapp-16bb1.firebaseapp.com",
  databaseURL: "https://reduxapp-16bb1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reduxapp-16bb1",
  storageBucket: "reduxapp-16bb1.appspot.com",
  messagingSenderId: "118564747101",
  appId: "1:118564747101:web:48f40f8bc79f36f72f9ab4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database()
export {database as default}

 
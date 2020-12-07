import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDuulyMhmTnDg7lcyWDPyE1X-nXfsPWmfI",
    authDomain: "vue3-full-course-e5d23.firebaseapp.com",
    databaseURL: "https://vue3-full-course-e5d23.firebaseio.com",
    projectId: "vue3-full-course-e5d23",
    storageBucket: "vue3-full-course-e5d23.appspot.com",
    messagingSenderId: "970686485996",
    appId: "1:970686485996:web:0cd04943b52f7130ed5cc9"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.database();
  export const chatsRef=db.ref('chats')
  export default firebase;
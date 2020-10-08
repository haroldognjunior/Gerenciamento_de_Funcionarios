import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {  
    apiKey: "AIzaSyApaWMdiR7oHn7T3ZMzoMTZBRNSInF91Rc",
    authDomain: "gerfun.firebaseapp.com",
    databaseURL: "https://gerfun.firebaseio.com",
    projectId: "gerfun",
    storageBucket: "gerfun.appspot.com",
    messagingSenderId: "136543157404",
    appId: "1:136543157404:web:31e4a25a3e8f158a1c8159"
  };
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAA7fBCCEyBTAfIR3Q6iDNW_zPaceNGqVw",
    authDomain: "facebook-clone-2e8ce.firebaseapp.com",
    databaseURL: "https://facebook-clone-2e8ce.firebaseio.com",
    projectId: "facebook-clone-2e8ce",
    storageBucket: "facebook-clone-2e8ce.appspot.com",
    messagingSenderId: "475009077736",
    appId: "1:475009077736:web:e17295ea56202cea1f545d",
    measurementId: "G-XM722QLX6G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
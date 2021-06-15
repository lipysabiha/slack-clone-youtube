import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDKlTw4D2mEnaFRklXtKk4fzYj7pzHxTxk",
    authDomain: "slack-clone-yt-c565c.firebaseapp.com",
    projectId: "slack-clone-yt-c565c",
    storageBucket: "slack-clone-yt-c565c.appspot.com",
    messagingSenderId: "982283536035",
    appId: "1:982283536035:web:d3725eedc37fbb93a62116"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABClBsNJG-6xwxA-R_o7-4l_FRThB02jY",
    authDomain: "crwn-db-fe6be.firebaseapp.com",
    databaseURL: "https://crwn-db-fe6be.firebaseio.com",
    projectId: "crwn-db-fe6be",
    storageBucket: "crwn-db-fe6be.appspot.com",
    messagingSenderId: "464946063139",
    appId: "1:464946063139:web:86b5de37e3944f96028e96",
    measurementId: "G-L46GYYX6BK"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
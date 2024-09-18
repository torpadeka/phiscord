import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const clientCredentials = {
    apiKey: 'AIzaSyAejwnOhSU7XOySvIYgZW_I0Ig8tur1PQM',
    authDomain: 'phiscord-4e85d.firebaseapp.com',
    projectId: 'phiscord-4e85d',
    storageBucket: 'phiscord-4e85d.appspot.com',
    messagingSenderId: '493151076592',
    appId: '1:493151076592:web:e32db014728e885acec235',
    measurementId: 'G-47ZRDYP0B6',
    databaseURL: 'https://phiscord-4e85d-default-rtdb.asia-southeast1.firebasedatabase.app',
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

const firestore = firebase.firestore();
const database = firebase.database();

const storage = firebase.storage();

export { firestore, database, storage };

export default firebase;

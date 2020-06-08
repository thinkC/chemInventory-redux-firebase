import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBK7VTlhgoeR6Y8IeQ7WowlBQ1zuwlK-T4",
    authDomain: "cheminventory-2124b.firebaseapp.com",
    databaseURL: "https://cheminventory-2124b.firebaseio.com",
    projectId: "cheminventory-2124b",
    storageBucket: "cheminventory-2124b.appspot.com",
    messagingSenderId: "100277955210",
    appId: "1:100277955210:web:69cbf102d2b29f04d7db73"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
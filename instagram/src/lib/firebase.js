import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyC13SPRmSjC-O9IyWadJKYJ3z4XgMdppR4',
  authDomain: 'instagram-d9f66.firebaseapp.com',
  projectId: 'instagram-d9f66',
  storageBucket: 'instagram-d9f66.appspot.com',
  messagingSenderId: '92655393694',
  appId: '1:92655393694:web:0e4c7f1a1dba39b69d548f',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// calling the seed file here (just once!)
// seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };

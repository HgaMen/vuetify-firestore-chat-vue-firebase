import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCPiVa6E9fLgbdAHZ7BRvy36gVF03VRH58',
  authDomain: 'vuetifychat-e86b9.firebaseapp.com',
  projectId: 'vuetifychat-e86b9',
  storageBucket: 'vuetifychat-e86b9.appspot.com',
  messagingSenderId: '825462559628',
  appId: '1:825462559628:web:9c3e7fa0d623d96092bca9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

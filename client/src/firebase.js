import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4KoBbSVAlmpXpReP2Ls_eL7r1xTeJxmQ",
  authDomain: "azure-incident-assistant-fbea3.firebaseapp.com",
  projectId: "azure-incident-assistant-fbea3",
  storageBucket: "azure-incident-assistant-fbea3.firebasestorage.app",
  messagingSenderId: "328226796176",
  appId: "1:328226796176:web:112e8a5adfac11d4585e15",
  measurementId: "G-GKJRDTSSCS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
  new GoogleAuthProvider();
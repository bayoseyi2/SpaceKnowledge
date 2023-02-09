import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8-RTZXZH2VeOnlMccJt7mCUT4LzJD9o",
  authDomain: "nsccdemo-da89b.firebaseapp.com",
  projectId: "nsccdemo-da89b",
  storageBucket: "nsccdemo-da89b.appspot.com",
  messagingSenderId: "20326878750",
  appId: "1:20326878750:web:7c4779de8d526be630e80f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}
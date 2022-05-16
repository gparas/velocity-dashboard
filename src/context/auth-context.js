import { useState, createContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, deleteDoc } from 'firebase/firestore';

const AuthContext = createContext();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

function AuthProvider(props) {
  const [authStateLoading, setAuthStateLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        setAuthStateLoading(false);
      } else {
        setUser(null);
        setAuthStateLoading(false);
      }
    });
  }, []);

  const signin = (email, password) =>
    setPersistence(auth, browserSessionPersistence).then(() =>
      signInWithEmailAndPassword(auth, email, password)
    );

  const register = (firstName, lastName, email, password, role) =>
    setPersistence(auth, browserSessionPersistence)
      .then(() => createUserWithEmailAndPassword(auth, email, password))
      .then(userCredential => {
        const uid = userCredential.user.uid;
        return setDoc(doc(db, 'users', uid), {
          uid,
          firstName,
          lastName,
          email,
          role,
        });
      });

  const logout = () => signOut(auth);

  const deleteAccount = async () =>
    await deleteDoc(doc(db, 'users', user.uid))
      .then(() => deleteUser(user))
      .catch(error => console.log(error));

  const value = {
    user,
    authStateLoading,
    signin,
    logout,
    register,
    deleteAccount,
  };
  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };

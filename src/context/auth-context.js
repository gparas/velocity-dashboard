import { useState, createContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

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

const firebaseApp = initializeApp(firebaseConfig);

function AuthProvider(props) {
  const [authStateLoading, setAuthStateLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

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

  const login = (email, password) =>
    setPersistence(auth, browserSessionPersistence).then(() =>
      signInWithEmailAndPassword(auth, email, password)
    );

  const register = (email, password) =>
    setPersistence(auth, browserSessionPersistence).then(() =>
      createUserWithEmailAndPassword(auth, email, password)
    );

  const logout = () => signOut(auth);

  const uploadAvatar = async file => {
    const uploadPath = `avatars/${user.uid}`;
    const storageRef = ref(storage, uploadPath);
    const img = await uploadBytes(storageRef, file);
    return getDownloadURL(img.ref);
  };

  const deleteAccount = async () =>
    await deleteDoc(doc(db, 'users', user.uid))
      .then(() => deleteUser(user))
      .catch(error => console.log(error));

  const value = {
    user,
    authStateLoading,
    login,
    logout,
    register,
    deleteAccount,
    uploadAvatar,
  };
  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };

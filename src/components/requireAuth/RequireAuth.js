import { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import FullPageLoading from '../fullPageLoading';

const RequireAuth = ({ children }) => {
  const [authStateLoading, setAuthStateLoading] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();

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

  if (authStateLoading) {
    return <FullPageLoading open />;
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

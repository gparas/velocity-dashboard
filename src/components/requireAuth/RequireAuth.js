import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({ children }) => {
  const { user, authStateLoading } = useAuth();
  const location = useLocation();

  if (authStateLoading) {
    return <div>loading</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

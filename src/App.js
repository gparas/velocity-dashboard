import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/requireAuth';

const Auth = lazy(() => import('./auth'));
const Dashboard = lazy(() => import('./dashboard'));
const Login = lazy(() => import('./auth/login'));
const Register = lazy(() => import('./auth/register'));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </Suspense>
  );
}

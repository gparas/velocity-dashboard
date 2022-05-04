import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/requireAuth';

const Auth = lazy(() => import('./auth'));
const Login = lazy(() => import('./auth/login'));
const Register = lazy(() => import('./auth/register'));
const Dashboard = lazy(() => import('./dashboard'));
const Overview = lazy(() => import('./dashboard/overview'));
const Analytics = lazy(() => import('./dashboard/analytics'));
const Chat = lazy(() => import('./dashboard/chat'));
const Settings = lazy(() => import('./dashboard/settings'));

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
        >
          <Route index={true} element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

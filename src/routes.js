import { lazy, Suspense } from 'react';
import Auth from './auth';
import Dashboard from './dashboard';
import RequireAuth from './components/requireAuth';
import NoMatch from './components/noMatch';
import {
  Chat as ChatIcon,
  Grid as OverviewIcon,
  Settings as SettingsIcon,
  Chart as AnalyticsIcon,
} from './icons';

const Login = lazy(() => import('./auth/login'));
const Register = lazy(() => import('./auth/register'));
const Overview = lazy(() => import('./dashboard/overview'));
const Analytics = lazy(() => import('./dashboard/analytics'));
const Chat = lazy(() => import('./dashboard/chat'));
const Settings = lazy(() => import('./dashboard/settings'));

const routes = [
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Overview />
          </Suspense>
        ),
        text: 'Overview',
        icon: <OverviewIcon fontSize="small" />,
      },
      {
        path: 'analytics',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Analytics />
          </Suspense>
        ),
        text: 'Analytics',
        icon: <AnalyticsIcon fontSize="small" />,
      },
      {
        path: 'chat',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Chat />
          </Suspense>
        ),
        text: 'Chat',
        icon: <ChatIcon fontSize="small" />,
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Settings />
          </Suspense>
        ),
        text: 'Settings',
        icon: <SettingsIcon fontSize="small" />,
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;

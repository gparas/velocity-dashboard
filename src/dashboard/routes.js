import Overview from './overview';
import Analytics from './analytics';
import Chat from './chat';
import Settings from './settings';
import Main from './components/main';
import {
  Chat as ChatIcon,
  Grid as OverviewIcon,
  Settings as SettingsIcon,
  Chart as AnalyticsIcon,
} from '../icons';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Overview />,
        text: 'Overview',
        icon: <OverviewIcon fontSize="small" />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
        text: 'Analytics',
        icon: <AnalyticsIcon fontSize="small" />,
      },
      {
        path: 'chat',
        element: <Chat />,
        text: 'Chat',
        icon: <ChatIcon fontSize="small" />,
      },
      {
        path: 'settings',
        element: <Settings />,
        text: 'Settings',
        icon: <SettingsIcon fontSize="small" />,
      },
    ],
  },
];

export default routes;

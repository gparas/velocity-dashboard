import {
  Analytics,
  Chat,
  Home,
  Login,
  NoMatch,
  Overview,
  Register,
  Settings,
  Vehicles
} from "./pages";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/chat", element: <Chat /> },
  { path: "/login", element: <Login /> },
  { path: "/overview", element: <Overview /> },
  { path: "/register", element: <Register /> },
  { path: "/settings", element: <Settings /> },
  { path: "/vehicles", element: <Vehicles /> },
  { path: "*", element: <NoMatch /> }
];

export default routes;

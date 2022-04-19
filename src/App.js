import { lazy, Suspense } from "react";
import { useAuth } from "./context/auth-context";

const Auth = lazy(() => import("./auth"));
const Dashboard = lazy(() => import("./dashboard"));

export default function App() {
  const { user } = useAuth();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {user ? <Dashboard /> : <Auth />}
    </Suspense>
  );
}

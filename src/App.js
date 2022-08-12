
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import auth from "./auth";
import { Navigate,Outlet } from 'react-router-dom';
import Dashboard from "./routes/dashboard";
import UserDash from "./routes/dashboard/users";
import Index from "./routes/index"
import Login from "./routes/login";
import Register from "./routes/register";


function App() {



  let routes = useRoutes([
    {
      path: '/dashboard',
      element: auth.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />,
      children: [
        { path: 'users', element: <a>helloo</a> },

      ]
    },

    { path: '/', element: <Index /> },
    {
      path: 'login',
      element: !auth.isAuthenticated ? <Login /> : <Navigate to="/dashboard" />,

    },

    { path: 'register', element: <Register/> },

  ])

  return routes
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;


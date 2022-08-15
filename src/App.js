
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import auth from "./auth";
import { Navigate } from 'react-router-dom';
import Index from "./routes/index"
import Login from "./routes/login";
import Servers from "./routes/servers";


function App() {



  let routes = useRoutes([
    // {
    //   path: '/dashboard',
    //   element: auth.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />,
    //   children: [
    //     { path: 'users', element: <a>helloo</a> },

    //   ]
    // },

    { path: '/', element: <Index /> },
    { path: '/login', element: <Login /> },

    { path: '/servers', element: <Servers /> },
    


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


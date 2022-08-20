
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import auth from "./auth";
import { Navigate } from 'react-router-dom';
import Landing from "./routes/landing"
import Login from "./routes/login";
import Servers from "./routes/servers";
import NavBar from "./components/NavBar";


function App() {



  let routes = useRoutes([
    // {
    //   path: '/dashboard',
    //   element: auth.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />,
    //   children: [
    //     { path: 'users', element: <a>helloo</a> },

    //   ]
    // },

    { path: '/', element: <Landing /> },
    { path: '/login', element: <Login /> },

    { path: '/servers', element: <Servers /> },
    


  ])

  return routes
}

const AppWrapper = () => {
  return (
    <Router>
      <NavBar/>
      <App />
    </Router>
  );
};

export default AppWrapper;


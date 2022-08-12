import { AppShell, Navbar, Header } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Shell from '../components/AppShell';

const Dashboard = () => {
    return (
      <>
      <Shell/>
      <Outlet/>

      </>
  
    )
  }
  
  export default Dashboard;
  
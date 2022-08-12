import { MenuLinks } from "./NavLinks";
import { AppShell, Navbar, Header } from '@mantine/core';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
  } from "react-router-dom";



const Shell = () => {
    return (
        <>
            <AppShell
                padding="md"
                navbar={<Navbar width={{ base: 300 }} p="xs">{<MenuLinks/>}</Navbar>}
                header={<Header height={60} p="xs">{<h1>iliad.vip</h1>}</Header>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                <ShellRoutes/>
            </AppShell>
        </>

    )
}

const ShellRoutes = () => {
    let routes = useRoutes([

        { path: 'users', element: <a>helloo</a> },

    
      ])
    
      return routes
}

export default Shell;
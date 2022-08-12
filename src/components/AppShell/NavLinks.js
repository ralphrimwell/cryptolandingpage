import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { LayoutDashboard, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { Link } from 'react-router-dom';


const MenuLink = (props) => {
    return (
        <>
            <UnstyledButton component={Link} to={props.to}
                sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                })}
            >
                <Group>
                    <ThemeIcon color={props.color} variant="light">
                        {props.icon}
                    </ThemeIcon>

                    <Text size="sm">{props.label}</Text>
                </Group>
            </UnstyledButton>
        </>
    )
}

const data = [
    { icon: <LayoutDashboard size={16} />, color: 'blue', label: 'Dashboard', to: '/dashboard' },
    { icon: <AlertCircle size={16} />, color: 'teal', label: 'Users', to: '/dashboard/users' },
    { icon: <Messages size={16} />, color: 'violet', label: 'Discussions', to: '/thin1' },
    { icon: <Database size={16} />, color: 'grape', label: 'Databases', to: 'thin2' },
];

export function MenuLinks() {
    const links = data.map((link) => <MenuLink {...link} key={link.label} />);
    return <div>{links}</div>;
}
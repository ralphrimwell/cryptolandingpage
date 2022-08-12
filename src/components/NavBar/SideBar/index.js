import React from "react";
import { CloseIcon, Icon, SideBarContainer, SidebarMenu, SidebarLink } from "./SideBarElements";

export const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/about'>About</SidebarLink>
                <SidebarLink to='/pricing'>Pricing</SidebarLink>
                <SidebarLink to='/login'>Login</SidebarLink>
                <SidebarLink to='/register'>Get started</SidebarLink>
            </SidebarMenu>
        </SideBarContainer>
    )
}
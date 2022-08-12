import React, { useState } from "react";
import { MobileIcon, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from "./NavBarElements";
import { FaBars } from 'react-icons/fa'
import { SideBar } from "./SideBar";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggleMenu} />
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>iliad.vip</NavLogo>
                    <MobileIcon onClick={toggleMenu}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/login'>Login</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/register'>Get Started</NavBtnLink>
                        </NavBtn>
                    </NavMenu>

                </NavBarContainer>
            </Nav>
        </>

    )
}

export default NavBar;
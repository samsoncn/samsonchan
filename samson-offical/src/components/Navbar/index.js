 //rafce
import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem} from './NavbarElement';
// import 

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">samson</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                            <NavLinks to="project">Project</NavLinks>
                            <NavLinks to="experience">Experience</NavLinks>

                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        
        </>
    );
};

export default Navbar;
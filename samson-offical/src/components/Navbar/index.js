 //rafce
import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtnLink, NavBtn} from './NavbarElement';
// import 

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">samson</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='project'>Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='resume'>Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contact'>Contact me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        
        </>
    );
};

export default Navbar;
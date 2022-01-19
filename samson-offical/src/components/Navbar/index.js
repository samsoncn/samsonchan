 //rafce
import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtnLink, NavBtn} from './NavbarElement';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        console.log(window.screenY);
        if(window.scrollY >= 300) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>SCHAN</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                // offset={-80}
                                // activeClass="active"
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='project'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                // offset={-30}
                            >Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='resume'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >Resume</NavLinks>
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
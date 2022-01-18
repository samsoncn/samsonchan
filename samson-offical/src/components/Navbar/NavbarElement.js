import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'rgba(0,0,0,0.7)' : 'transparent')};
    height: ${({ scrollNav }) => (scrollNav ? '80px' : '120px')};
    margin-top:  ${({ scrollNav }) => (scrollNav ? '-80px' : '-120px')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: ${({ scrollNav }) => (scrollNav ? 'all 0.3s ease-in-out' : 'none')};

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height 120px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        height: ${({ scrollNav }) => (scrollNav ? '50px' : '75px')};
        // top: ${({ scrollNav }) => (scrollNav ? '1rem' : '1.2rem')};
        // right: 1.5rem;
        // top: auto;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    // margin-left: 20%;
    // margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.2rem;
    height: 100%;
    cursor: pointer;
    // border-bottom: ${({ scrollNav }) => (scrollNav ? '5px solid #065d93' : 'none')};

    &:hover {
        // border-bottom: ${({ scrollNav }) => (scrollNav ? "5px solid #065d93" : "none")};
        border-bottom: 3px solid #87CEFA;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #87CEFA;
    // background: #4682B4;
    white-space: nowrap;
    padding: 10px 24px;
    color: #010666;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #23a5f6;
        // color: #010666;
    }
`
import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="project" onClick={toggle}>Project</SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
            
        </SidebarContainer>
    );
};

export default Sidebar;

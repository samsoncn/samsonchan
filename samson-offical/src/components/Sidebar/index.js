import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement';


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="project">Project</SidebarLink>
                    <SidebarLink to="experience">Experience</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
            
        </SidebarContainer>
    );
};

export default Sidebar;

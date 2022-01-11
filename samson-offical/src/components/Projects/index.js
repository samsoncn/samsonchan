import React from 'react';
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElement';
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';

const Projects = () => {
    return (
        <ProjectsContainer id="project">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Project1</ProjectsH2>
                    <ProjectsP>This project is about web app</ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Project2</ProjectsH2>
                    <ProjectsP>This project 2 is about web app</ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Project3</ProjectsH2>
                    <ProjectsP>This project 3 is about web app</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
            
        </ProjectsContainer>
    )
};

export default Projects;

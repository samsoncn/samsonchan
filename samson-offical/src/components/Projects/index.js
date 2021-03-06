import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectA,
} from "./ProjectsElement";
import Icon1 from "../../images/ASL.png";
import Icon2 from "../../images/vision0.png";
import Icon3 from "../../images/sharger.png";

const Projects = () => {
  return (
    <ProjectsContainer id="project">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectA href="https://devpost.com/software/asl-vision/">
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>ASL Vision</ProjectsH2>
            <ProjectsP>
              A wbb app detects American Sign Language using Google Cloud API to
              generate a dataset for recognition machine learning model.{" "}
            </ProjectsP>
          </ProjectA>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectA href="https://devpost.com/software/vision0">
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Vision0</ProjectsH2>
            <ProjectsP>
              Reactive traffic signal light intersection using computer visoin
              and machine learning to create a feedback loop to traffic lights.
            </ProjectsP>
          </ProjectA>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectA href="https://devpost.com/software/sharger">
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>Sharger</ProjectsH2>
            <ProjectsP>
              A winner web app targeting EV future resolving the charging
              problems by using software to expand their chanrging station.{" "}
            </ProjectsP>
          </ProjectA>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;

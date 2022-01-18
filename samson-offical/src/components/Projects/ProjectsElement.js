import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';


export const ProjectsContainer = styled.div`
    height: 1050px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1650px;
    }
    @media screen and (max-width: 480px) {
        height: 1700px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 26px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 450px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        // transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectA = styled.a`
    text-align: center;
    text-decoration: none;
    color: black;
`

export const ProjectsIcon = styled.img`
    height: 260px;
    width: 100%;
    margin-bottom: 30px;
`;

export const ProjectsH1 = styled.h1`
    color: #fff;
    margin-bottom: 54px;
    // line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;


    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
`;
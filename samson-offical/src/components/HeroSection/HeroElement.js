import styled from "styled-components"; 

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1020px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
                180deg, 
                rgba(0,0,0,0.1) 0%,
                rgba(0,0,0,0.3) 100%
            ), 
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%,
                transparent 100%
            );
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: 232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-decoration: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    margin-top: -100px;

    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }


`
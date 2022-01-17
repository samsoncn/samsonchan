import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img, TextWrapper } from './InfoElement';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, href}) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            
                            <BtnWrap>
                                <Button 
                                    to='/contact' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    // offset={-120}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2= {dark2 ? 1: 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <a href={href}>
                                <ImgWrap>
                                    <Img id={id} src={img} alt={alt}/>
                                </ImgWrap>
                            </a>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    );
};

export default InfoSection;

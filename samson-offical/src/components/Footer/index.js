import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from "./FooterElement";
import {
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                SCHAN
              </SocialLogo>

              <WebsiteRights>
                samson © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="mailto:samson.sn.chan@gmail.com"
                  target=""
                  aria-label="Email"
                >
                  <FaMailBulk />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/samson-chan-15913b169/"
                  target=""
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/samsoncn"
                  target=""
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/samson.chan.9"
                  target=""
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/samsonnchan/"
                  target=""
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

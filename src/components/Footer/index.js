import React from "react"
import { FaFacebook, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa"
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterStyled"
function index() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>
            <SocialIcon />
            JJ
          </SocialLogo>
          <WebsiteRights>
            {" "}
            &copy; {new Date().getFullYear()} Jelson J
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="//https://github.com/jelsonjay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Codepen">
              <FaCodepen />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default index

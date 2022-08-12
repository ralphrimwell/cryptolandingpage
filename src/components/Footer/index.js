import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>company</FooterLinkTitle>
                            <FooterLink to="/">about us</FooterLink>
                            <FooterLink to="/">how it works</FooterLink>
                            <FooterLink to="/">help centre</FooterLink>
                            <FooterLink to="/">branding</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>business</FooterLinkTitle>
                            <FooterLink to="/">pricing</FooterLink>
                            <FooterLink to="/">agreement</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>policies</FooterLinkTitle>
                            <FooterLink to="/">terms of service</FooterLink>
                            <FooterLink to="/">privacy</FooterLink>
                            <FooterLink to="/">cookie settings</FooterLink>
                            <FooterLink to="/">guidelines</FooterLink>
                            <FooterLink to="/">acknowledgements</FooterLink>
                            <FooterLink to="/">licenses</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>find us</FooterLinkTitle>
                            <FooterLink to="/">instagram</FooterLink>
                            <FooterLink to="/">twitter</FooterLink>
                            <FooterLink to="/">facebook</FooterLink>
                            <FooterLink to="/">youtube</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        iliad
                    </SocialLogo>
                    <WebsiteRights>
                        iliad © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target = "_blank" aria-label= "Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target = "_blank" aria-label= "instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target = "_blank" aria-label= "youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target = "_blank" aria-label= "twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
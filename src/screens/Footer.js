import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  padding: 110px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  @media (max-width: 600px) {
    padding: 110px 30px;
  }
`;

const LogoImg = styled.img`
  @media (max-width: 600px) {
    width: 160px;
    height: auto;
  }
`;

const UnorderList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const List = styled.li``;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s linear;
  :hover {
    color: ${({ theme }) => theme.orange};
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.orangeHover};
  }
`;
const ContactBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

const Column1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Column2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Column3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const ContactText = styled.p`
  color: white;
  font-size: 22px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
`;

const FooterBottom = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.black};
  border-top: 1px solid black;
`;

const FooterBottomText = styled.p`
  font-size: 16px;
  color: white;
  line-height: 30px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <LogoImg src={logo} alt="Logo" />
        <UnorderList>
          <List>
            <Link href="#aboutus">About Us</Link>
          </List>
          <List>
            <Link href="#amenities">Amenities</Link>
          </List>
          <List>
            <Link href="#gallery">Gallery</Link>
          </List>
          <List>
            <Link href="#packages">Packages</Link>
          </List>
          <List>
            <Link href="#booking">Booking</Link>
          </List>
        </UnorderList>
        <IconBox>
          <Icon>
            <FaFacebookF style={{ color: "white", fontSize: "14px" }} />
          </Icon>
          <Icon>
            <FaTwitter style={{ color: "white", fontSize: "14px" }} />
          </Icon>
          <Icon>
            <FaInstagram style={{ color: "white", fontSize: "14px" }} />
          </Icon>
          <Icon>
            <FaGoogle style={{ color: "white", fontSize: "14px" }} />
          </Icon>
        </IconBox>
        <ContactBox>
          <Column1>
            <ContactText>+1 800 123 456</ContactText>
          </Column1>
          <Column2>
            <ContactText>info@domain.com</ContactText>
          </Column2>
          <Column3>
            <ContactText>34-D, Greenville, NJ</ContactText>
          </Column3>
        </ContactBox>
      </Container>
      <FooterBottom>
        <FooterBottomText>
          Copyright © 2022 Hotel and BnB | Powered by Hotel and BnB
        </FooterBottomText>
      </FooterBottom>
    </>
  );
};

export default Footer;

import React, { useState } from "react";
import styled from "styled-components";
import hero from "../assets/images/hero-section-banner.jpg";
import logo from "../assets/images/logo.png";
import { FaLongArrowAltRight, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const BackgroundImage = styled.div`
  width: 100%;
  height: 540px;
  background-image: url(${hero});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  width: 100%;
  height: 540px;
  background-color: rgba(0, 0, 0, 0.5);
  //   background-color: ${({ theme }) => theme.overlayColor1};
  // background-image: linear-gradient(
  //     135deg,
  //     ${({ theme }) => theme.overlayColor1} 0%,
  //     ${({ theme }) => theme.overlayColor2} 100%
  //   );
  //   opacity: 0.7;
  //   transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
`;

const Container = styled.div`
  width: 100%;
  height: 540px;
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: initial;
    padding: 0px 0px;
  }
`;

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`;

const LogoImg = styled.img`
  @media (max-width: 600px) {
    width: 160px;
    height: auto;
  }
`;

const MenuIcon = styled.div`
  width: 43px;
  height: 43px;
  background-color: ${({ theme }) => theme.orange};
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.orangeHover};
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 90px;
  width: 100%;
  background-color: #f9f9f9;
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  width: 100%;
  height: 45px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  color: #311d3d;
  font-size: 15px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.orange};
    transition: all 0.2s linear;
  }
`;

const UnorderList = styled.ul`
  width: 100%;
  height: 60px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 600px) {
    display: none;
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

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;

const Heading = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: white;
  font-size: 80px;
  @media (max-width: 992px) {
    font-size: 56px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  margin: 30px 0px 40px 0px;
`;

const Button = styled.a`
  width: auto;
  height: auto;
  text-decoration: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 600;
  padding: 18px 32px;
  color: white;
  background-color: ${({ theme }) => theme.orange};
  border: solid ${({ theme }) => theme.orange};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.orangeHover};
    color: ${({ theme }) => theme.black};
  }
`;

const Span = styled.span`
  display: flex;
  gap: 10px;
`;

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <BackgroundImage id="home">
      <Overlay>
        <Container>
          <LogoBox>
            <LogoImg src={logo} alt="Logo" />
            <MenuIcon onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <MdClose style={{ color: "white", fontSize: "26px" }} />
              ) : (
                <FaBars style={{ color: "white", fontSize: "22px" }} />
              )}
            </MenuIcon>
          </LogoBox>
          {showMenu && (
            <Menu>
              <MenuItem onClick={closeMenu} href="#aboutus">
                About Us
              </MenuItem>
              <MenuItem onClick={closeMenu} href="#amenities">
                Amenities
              </MenuItem>
              <MenuItem onClick={closeMenu} href="#gallery">
                Gallery
              </MenuItem>
              <MenuItem onClick={closeMenu} href="#packages">
                Packages
              </MenuItem>
              <MenuItem onClick={closeMenu} href="#booking">
                Booking
              </MenuItem>
            </Menu>
          )}
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
          <Content>
            <Heading>THE MOUNT INN</Heading>
            <Text>Awarded Spa Resort and BnB in Greenville, New Jersey</Text>
            <Button href="#booking">
              <Span>
                MAKE AN ENQUIRY
                <FaLongArrowAltRight />
              </Span>
            </Button>
          </Content>
        </Container>
      </Overlay>
    </BackgroundImage>
  );
};

export default Home;

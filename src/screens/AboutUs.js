import React from "react";
import styled from "styled-components";
import hotelBar from "../assets/images/hotel-bar.jpg";

const Container = styled.div`
  width: 100%;
  padding: 110px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    padding: 110px 30px;
  }
`;

const HeadingMain = styled.p`
  font-size: 48px;
  font-weight: 500;
  color: #11202a;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #1d394b;
  line-height: 30px;
`;

const HeadingSecond = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: #11202a;
  font-family: "Quicksand", sans-serif;
  line-height: 30px;
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;

const HeadingThird = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #1d394b;
  line-height: 30px;
  margin: 20px 0px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  gap: 60px;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 60px;
  }
`;

const ImageWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 28vw;
  border-radius: 7px;
  @media (max-width: 900px) {
    height: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const AboutUs = () => {
  return (
    <Container id="aboutus">
      <HeadingMain>About Us</HeadingMain>
      <Text>Our Tradition Of Best Hospitality</Text>
      <Box>
        <ImageWrap>
          <Image src={hotelBar} alt="Hotel Bar" />
        </ImageWrap>
        <Content>
          <HeadingSecond>24 Years Of Warm Welcome...</HeadingSecond>
          <HeadingThird>
            Aliquam suscipit felis a arcu laoreet congue. Fusce porta euismod
            magna, eu vehicula tellus feugiat ac.
          </HeadingThird>
          <Text>
            Phasellus accumsan mauris sit amet urna pretium varius. Aliquam
            suscipit felis a arcu laoreet congue. Habeo nemore appellantur eu
            usu, usu putant adolescens consequuntur ei, mel tempor consulatu
            voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi
            ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in,
            no mei alienum accusata.
          </Text>
        </Content>
      </Box>
    </Container>
  );
};

export default AboutUs;

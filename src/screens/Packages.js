import React from "react";
import styled from "styled-components";
import roomservice from "../assets/images/room-service.png";
import wifi from "../assets/images/wifi-connection.png";
import carrental from "../assets/images/car-rental.png";
import beer from "../assets/images/beer.png";
import restaurant from "../assets/images/restaurant-icon.png";

import singleroom from "../assets/images/singleroom.jpg";
import doubleroom from "../assets/images/doubleroom.jpg";
import duplexsuite from "../assets/images/duplexsuite.jpg";
import executivesuite from "../assets/images/executivesuite.jpg";

const Container = styled.div`
  width: 100%;
  padding: 110px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f9;
  @media (max-width: 1200px) {
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

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(96% / 2);
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px 0px;
  gap: 30px;
`;
const EmptyBox = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 650px) {
    flex-basis: 190px;
  }
`;
const PriceBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  padding: 0px 30px;
`;
const Price = styled.p`
  font-size: 16px;
  color: white;
`;
const CardHeading = styled.p`
  font-size: 26px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.black};
  padding-left: 30px;
  padding-right: 30px;
`;
const CardText = styled.p`
  font-size: 16 px;
  color: ${({ theme }) => theme.black};
  padding-left: 30px;
  padding-right: 30px;
`;
const Services = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

const ServicesImage = styled.img`
  width: 30px;
`;

const Packages = () => {
  return (
    <Container id="packages">
      <HeadingMain>Packages</HeadingMain>
      <Text>Choice Of Rooms</Text>
      <Box>
        <Card>
          <Left style={{ backgroundImage: `url(${singleroom})` }}>
            <EmptyBox></EmptyBox>
            <PriceBox>
              <Price>$ 125 / Night</Price>
            </PriceBox>
          </Left>
          <Right>
            <CardHeading>Single Room</CardHeading>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <Services>
              <ServicesImage src={roomservice} alt="Room Service" />
              <ServicesImage src={wifi} alt="Secure Wi-fi" />
              <ServicesImage src={carrental} alt="Car Rental" />
              <ServicesImage src={beer} alt="Beer" />
            </Services>
          </Right>
        </Card>
        <Card>
          <Left style={{ backgroundImage: `url(${doubleroom})` }}>
            <EmptyBox></EmptyBox>
            <PriceBox>
              <Price>$ 255 / Night</Price>
            </PriceBox>
          </Left>
          <Right>
            <CardHeading>Double Room</CardHeading>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <Services>
              <ServicesImage src={roomservice} alt="Room Service" />
              <ServicesImage src={wifi} alt="Secure Wi-fi" />
              <ServicesImage src={carrental} alt="Car Rental" />
              <ServicesImage src={beer} alt="Beer" />
            </Services>
          </Right>
        </Card>
        <Card>
          <Left style={{ backgroundImage: `url(${executivesuite})` }}>
            <EmptyBox></EmptyBox>
            <PriceBox>
              <Price>$ 375 / Night</Price>
            </PriceBox>
          </Left>
          <Right>
            <CardHeading>Executive Suite</CardHeading>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <Services>
              <ServicesImage src={roomservice} alt="Room Service" />
              <ServicesImage src={wifi} alt="Secure Wi-fi" />
              <ServicesImage src={carrental} alt="Car Rental" />
              <ServicesImage src={beer} alt="Beer" />
            </Services>
          </Right>
        </Card>
        <Card>
          <Left style={{ backgroundImage: `url(${duplexsuite})` }}>
            <EmptyBox></EmptyBox>
            <PriceBox>
              <Price>$ 425 / Night</Price>
            </PriceBox>
          </Left>
          <Right>
            <CardHeading>Duplex Suite</CardHeading>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <Services>
              <ServicesImage src={roomservice} alt="Room Service" />
              <ServicesImage src={wifi} alt="Secure Wi-fi" />
              <ServicesImage src={carrental} alt="Car Rental" />
              <ServicesImage src={beer} alt="Beer" />
              <ServicesImage src={restaurant} alt="Restaurant" />
            </Services>
          </Right>
        </Card>
      </Box>
    </Container>
  );
};

export default Packages;

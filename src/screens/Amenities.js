import React from "react";
import styled from "styled-components";
import beer from "../assets/images/beer.png";
import coffee from "../assets/images/coffee.png";
import restaurant from "../assets/images/restaurant-icon.png";
import roomservice from "../assets/images/room-service.png";
import reception from "../assets/images/reception.png";
import carrental from "../assets/images/car-rental.png";
import hairdryer from "../assets/images/hair-dryer.png";
import wifi from "../assets/images/wifi-connection.png";
import hotellinens from "../assets/images/hotel-linens.jpg";
import toileteries from "../assets/images/toileteries.jpg";
import breakfast from "../assets/images/breakfast.jpg";
import swimmingpool from "../assets/images/swimmingpool.jpg";
import hotelmassage from "../assets/images/hotelmassage.jpg";
import hotelmeal from "../assets/images/hotelmeal.jpg";
import bar from "../assets/images/bar.jpg";
import ctabg from "../assets/images/cta-bg.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  padding: 110px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f9;
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

const Box1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const CardSmall = styled.div`
  padding: 10px;
  width: calc(100% / 8);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    width: calc(100% / 4);
  }
  @media (max-width: 600px) {
    width: calc(100% / 2);
  }
`;

const ImageSmall = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 5vw;
  height: auto;
  @media (max-width: 900px) {
    width: 10vw;
  }
  @media (max-width: 600px) {
    width: 15vw;
  }
`;

const CardTextSmall = styled.p`
  font-size: 16px;
  color: #1d394b;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Box2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PopulatedCard = styled.div`
  flex-basis: calc(90% / 4);
  height: 250px;
  background-image: url(${hotellinens});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 7px;
  @media (max-width: 900px) {
    flex-basis: calc(95% / 2);
  }
  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;

const PopulatedCardOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PopulatedCardText = styled.p`
  font-size: 28px;
  color: white;
  font-family: "Quicksand", sans-serif;
`;

const BackgroundImage = styled.div`
  background-image: url(${ctabg});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;
const Section = styled.div`
  width: 100%;
  padding: 110px 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 30px;
    padding: 110px 30px;
  }
  @media (max-width: 600px) {
    padding: 50px 30px;
  }
`;
const Content = styled.div`
  flex: 1;
`;
const ButtonBox = styled.div`
  flex-basis: 300px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 960px) {
    flex-basis: 0px;
  }
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
  display: inline-block;
  :hover {
    background-color: ${({ theme }) => theme.orangeHover};
    color: ${({ theme }) => theme.black};
  }
`;

const Span = styled.span`
  display: flex;
  gap: 10px;
`;

const HeadingMain2 = styled.p`
  font-size: 48px;
  font-weight: 500;
  color: #11202a;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 25px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 875px) {
    font-size: 40px;
  }
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;

const Text2 = styled.p`
  font-size: 16px;
  color: #1d394b;
  line-height: 30px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Amenities = () => {
  return (
    <>
      <Container id="amenities">
        <HeadingMain>Amenities</HeadingMain>
        <Text>Providing Hospitality the Correct Way</Text>
        <Box1>
          <CardSmall>
            <ImageSmall>
              <Image src={beer} alt="Home Brewery" />
            </ImageSmall>
            <CardTextSmall>Home Brewery</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={coffee} alt="Coffee Bar" />
            </ImageSmall>
            <CardTextSmall>Coffee Bar</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={restaurant} alt="Restaurant" />
            </ImageSmall>
            <CardTextSmall>Restaurant</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={roomservice} alt="Room Service" />
            </ImageSmall>
            <CardTextSmall>Room Service</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={reception} alt="24/7 Reception" />
            </ImageSmall>
            <CardTextSmall>24/7 Reception</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={carrental} alt="Car Rental" />
            </ImageSmall>
            <CardTextSmall>Car Rental</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={hairdryer} alt="Hair Dryer" />
            </ImageSmall>
            <CardTextSmall>Hair Dryer</CardTextSmall>
          </CardSmall>
          <CardSmall>
            <ImageSmall>
              <Image src={wifi} alt="Secure Wi-Fi" />
            </ImageSmall>
            <CardTextSmall>Secure Wi-Fi</CardTextSmall>
          </CardSmall>
        </Box1>
        <Box2>
          <PopulatedCard style={{ backgroundImage: `url(${hotellinens})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>Linens</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard style={{ backgroundImage: `url(${toileteries})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>Toiletries</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard style={{ backgroundImage: `url(${breakfast})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>Breakfast</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard style={{ backgroundImage: `url(${swimmingpool})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>Swimming Pool</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard style={{ backgroundImage: `url(${hotelmassage})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>Wellness Spa</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard style={{ backgroundImage: `url(${hotelmeal})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>Fine Dining</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard style={{ backgroundImage: `url(${bar})` }}>
            <PopulatedCardOverlay>
              <PopulatedCardText>In-house Bar</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
          <PopulatedCard>
            <PopulatedCardOverlay>
              <PopulatedCardText>Banquet Hall</PopulatedCardText>
            </PopulatedCardOverlay>
          </PopulatedCard>
        </Box2>
      </Container>
      <BackgroundImage>
        <Overlay>
          <Section>
            <Content>
              <HeadingMain2 style={{ color: "white" }}>
                Escape To The Luxury This Summer
              </HeadingMain2>
              <Text2 style={{ color: "white" }}>
                Habeo nemore appellantur eu usu, usu putant adolescens
                consequuntur ei, mel tempor consulatu voluptaria te. Et dicunt
                qualisque vel, eam ubique mucius docendi ne. Debet decore
                repudiare id mei, homero iuvaret fastidii ius in, no mei alienum
                accusata.
              </Text2>
            </Content>
            <ButtonBox>
              <Button href="#booking">
                <Span>
                  MAKE AN ENQUIRY
                  <FaLongArrowAltRight />
                </Span>
              </Button>
            </ButtonBox>
          </Section>
        </Overlay>
      </BackgroundImage>
    </>
  );
};

export default Amenities;

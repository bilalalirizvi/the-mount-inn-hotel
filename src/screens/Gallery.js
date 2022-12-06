import React from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import g1 from "../assets/images/gallery-slide1.jpg";
import g2 from "../assets/images/gallery-slide2.jpg";
import g3 from "../assets/images/gallery-slide3.jpg";
import g4 from "../assets/images/gallery-slide4.jpg";
import g5 from "../assets/images/gallery-slide5.jpg";
import g6 from "../assets/images/gallery-slide6.jpg";
import g7 from "../assets/images/gallery-slide7.jpg";
import g8 from "../assets/images/gallery-slide8.jpg";

const Container = styled.div`
  width: 100%;
  padding: 110px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
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

const Box = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Gallery = () => {
  return (
    <Container id="gallery">
      <HeadingMain>Gallery</HeadingMain>
      <Text>Peek Into Our World</Text>
      <Box>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideImage src={g1} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g2} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g3} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g4} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g5} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g6} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g7} alt="Gallery" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src={g8} alt="Gallery" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

export default Gallery;

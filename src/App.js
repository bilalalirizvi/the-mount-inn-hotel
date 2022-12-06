import React from "react";
import {
  Home,
  AboutUs,
  Amenities,
  Gallery,
  Packages,
  Booking,
  Footer,
} from "./screens";
import { ThemeProvider } from "styled-components";
import theme from "./styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <AboutUs />
      <Amenities />
      <Gallery />
      <Packages />
      <Booking />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

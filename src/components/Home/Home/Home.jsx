import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;

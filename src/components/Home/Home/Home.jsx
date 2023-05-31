import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Menu from "../Menu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";
import PopularMenu from "../Menu/PopularMenu";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;

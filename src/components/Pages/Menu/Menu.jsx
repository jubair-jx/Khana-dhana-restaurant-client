import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover
        des={"Would You Liked This Dish"}
        title={"Our Menu"}
        img={MenuImg}
      ></Cover>
    </div>
  );
};

export default Menu;

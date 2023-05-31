import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/Menu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Bistro || Menu</title>
        </Helmet>
        <Cover
          des={"Would You Liked This Dish"}
          title={"Our Menu"}
          img={MenuImg}
        ></Cover>
        <div className="mt-8">
          <PopularMenu></PopularMenu>
        </div>
      </div>
      <div>
        <Helmet>
          <title>Bistro || Menu</title>
        </Helmet>
        <Cover
          des={"Would You Liked This Dish"}
          title={"Our Menu"}
          img={MenuImg}
        ></Cover>
        <div className="mt-8">
          <PopularMenu></PopularMenu>
        </div>
      </div>
      <div>
        <Helmet>
          <title>Bistro || Menu</title>
        </Helmet>
        <Cover
          des={"Would You Liked This Dish"}
          title={"Our Menu"}
          img={MenuImg}
        ></Cover>
        <div className="mt-8">
          <PopularMenu></PopularMenu>
        </div>
      </div>
    </div>
  );
};

export default Menu;

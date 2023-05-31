import React from "react";
import { Helmet } from "react-helmet-async";

import MenuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/Menu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import menuImg from "../../../assets/menu/menu-bg.png";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
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
      <div className="mt-8">
        <Cover img={menuImg} title="our menu"></Cover>
        {/* main cover */}
        <SectionTitle
          subHeading="Don't Miss"
          heading="Today's Offer"
        ></SectionTitle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu items  */}
        <MenuCategory
          items={desserts}
          title="dessert"
          img={dessertImg}
        ></MenuCategory>
        <MenuCategory
          items={pizza}
          title={"pizza"}
          img={pizzaImg}
        ></MenuCategory>
        <MenuCategory
          items={salad}
          title={"salad"}
          img={saladImg}
        ></MenuCategory>
        <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;

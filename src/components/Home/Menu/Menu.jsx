import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ShowMenuItem from "./ShowMenuItem";

const Menu = () => {
  const [popularMenu, setPopularMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenus = data.filter((menu) => menu.category === "popular");
        setPopularMenu(popularMenus);
      });
  }, []);
  return (
    <div className="mx-auto">
      <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10 mt-5 px-16 py-10">
        {popularMenu.map((item) => (
          <ShowMenuItem item={item}></ShowMenuItem>
        ))}
      </div>
      <button className="btn text-center mx-auto btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </div>
  );
};

export default Menu;

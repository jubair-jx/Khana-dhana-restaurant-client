import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ShowMenuItem from "./ShowMenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((menu) => menu.category === "popular");

  return (
    <div className="">
      <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10 mt-5 px-16 py-10">
        {popularMenu.map((item) => (
          <ShowMenuItem item={item}></ShowMenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mb-6">
        <button className="btn text-center mx-auto btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;

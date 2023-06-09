import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ShowMenuItem from "../../Home/Menu/ShowMenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {/*THis is Menu Category*/}
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <ShowMenuItem key={item._id} item={item}></ShowMenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;

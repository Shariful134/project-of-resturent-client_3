import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className=" mb-28">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-x-20 ">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="uppercase btn btn-outline border_0 border-b-4 mt-2">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

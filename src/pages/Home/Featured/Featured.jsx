import React from "react";
import SectionTitle from "../../../component/SectionTilte/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured_img bg-fixed ">
      <SectionTitle
        subHeading={"Check in Out"}
        heading={"Our Featured menu"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center px-44 py-20">
        <div>
          <img className="" src={featuredImg} alt="" />
        </div>
        <div className=" md:ml-12 text-white">
          <p>March 20, 2023</p>
          <p className=" uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border_0 border-b-4 mt-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

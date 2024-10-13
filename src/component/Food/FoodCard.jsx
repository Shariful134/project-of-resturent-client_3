import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card bg-slate-200 border-2 max-w-96 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute top-3 right-5 rounded px-4 bg-slate-800 text-white">
        {"$ " + price}
      </p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions ">
          <button className="uppercase btn btn-outline border_0 border-b-4 mt-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

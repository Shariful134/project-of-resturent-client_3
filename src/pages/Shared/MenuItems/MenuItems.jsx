const MenuItems = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="flex space-x-4 border-b-2 border-slate-100 shadow-md shadow-slate-200">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[120px]"
          src={image}
          alt=""
        />
        <div>
          <h3 className="uppercase">{name}------------</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">{price}</p>
      </div>
    </div>
  );
};

export default MenuItems;

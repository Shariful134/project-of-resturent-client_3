import SectionTitle from "../../../component/SectionTilte/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const populer = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-5 ">
      <SectionTitle
        subHeading={"---Popular our Menu---"}
        heading={"From our Menu"}
      ></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {populer.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <Link to="/order">
          <button className="uppercase btn btn-outline border_0 border-b-4 mt-2">
            Order favorite food
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopulerMenu;

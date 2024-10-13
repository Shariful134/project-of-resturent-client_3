import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopuperMenu/PopulerMenu";
import Testomonial from "../Testomonial/Testomonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistro | home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;

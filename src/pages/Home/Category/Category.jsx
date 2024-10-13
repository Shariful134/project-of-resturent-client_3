// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import swiper_1 from "../../../assets/home/slide1.jpg";
import swiper_2 from "../../../assets/home/slide2.jpg";
import swiper_3 from "../../../assets/home/slide3.jpg";
import swiper_4 from "../../../assets/home/slide4.jpg";
import swiper_5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/SectionTilte/SectionTitle";
// mport SectionTitle from "../../../component/SectionTilte/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00Pm to 10:00 Am---"}
        heading={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12 "
      >
        <SwiperSlide>
          <img src={swiper_1} alt="" />
          <h2 className="text-3xl text-center uppercase  text-slate-700  -mt-24 pb-5">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_2} alt="" />
          <h2 className="text-3xl text-center uppercase text-slate-700 drop-shadow-lg -mt-24 pb-5">
            Shoups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_3} alt="" />
          <h2 className="text-3xl text-center uppercase  text-slate-700  drop-shadow-lg -mt-24 pb-5">
            Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_4} alt="" />
          <h2 className="text-3xl text-center uppercase  text-slate-700  drop-shadow-lg -mt-24 pb-5">
            shoup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_5} alt="" />
          <h2 className="text-3xl text-center uppercase  text-slate-700  drop-shadow-lg -mt-24 pb-5">
            salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

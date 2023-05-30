import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="Order Online"
      ></SectionTitle>
      <div className="mt-6 px-24 py-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} alt="" />
              <h2 className="-mt-12 shadow-xl border-2 text-center text-2xl text-white">
                SALADS
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h2 className="-mt-12 shadow-xl border-2 text-center text-2xl text-white">
              SALADS
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h2 className="-mt-12 shadow-xl border-2 text-center text-2xl text-white">
              SALADS
            </h2>
          </SwiperSlide>

          <SwiperSlide>
            <img src={img4} alt="" />
            <h2 className="-mt-12 shadow-xl border-2 text-center text-2xl text-white">
              SALADS
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h2 className="-mt-12 shadow-xl border-2 text-center text-2xl text-white">
              SALADS
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h2 className="-mt-12 shadow-xl border-2 text-center text-2xl text-white">
              SALADS
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;

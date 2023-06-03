import React from "react";
import OrderCard from "../../Shared/OrderCard/OrderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const OrderMap = ({ item }) => {
  return (
    <Swiper modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-auto md:px-14">
          {item.map((item) => (
            <OrderCard item={item}></OrderCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderMap;

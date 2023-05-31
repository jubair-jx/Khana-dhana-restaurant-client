import React from "react";
import OrderCard from "../../Shared/OrderCard/OrderCard";

const OrderMap = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-auto md:px-14">
      {item.map((item) => (
        <OrderCard item={item}></OrderCard>
      ))}
    </div>
  );
};

export default OrderMap;

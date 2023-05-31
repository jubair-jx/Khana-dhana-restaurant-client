import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderCard from "../../Shared/OrderCard/OrderCard";
import OrderMap from "./OrderMap";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        title={"Order"}
        img={coverImg}
        des={"Would Like this Dish.?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center mt-6 mb-8 text-xl font-medium">
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
        </div>

        <TabPanel>
          <OrderMap item={salad}></OrderMap>
        </TabPanel>
        <TabPanel>
          <OrderMap item={pizza}></OrderMap>
        </TabPanel>
        <TabPanel>
          <OrderMap item={soup}></OrderMap>
        </TabPanel>
        <TabPanel>
          <OrderMap item={desserts}></OrderMap>
        </TabPanel>
        <TabPanel>
          <OrderMap item={drinks}></OrderMap>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

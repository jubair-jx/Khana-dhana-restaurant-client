import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faChartLine,
  faShoppingCart,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../context/DataContext";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";

const Home = () => {
  const { orders, products, categories } = useContext(DataContext);
  const data = [
    {
      entry: "Categories",
      count: categories.length,
      twColor: "bg-red-500",
      color: "rgb(239, 68, 68)",
      icon: faThLarge,
    },
    {
      entry: "Products",
      count: products.length,
      twColor: "bg-orange-500",
      color: "rgb(249, 115, 22)",
      icon: faBoxOpen,
    },
    {
      entry: "Orders",
      count: orders.length,
      twColor: "bg-pink-500",
      color: "rgb(236, 72, 153)",
      icon: faShoppingCart,
    },
    {
      entry: "Sales",
      count: '341',
      twColor: "bg-lightBlue-500",
      color: "rgb(14, 165, 233)",
      icon: faChartLine,
    },
  ];
  return (
    <div className="px-4 md:px-10 mx-auto w-full">
      <div className="flex flex-wrap">
        {data.map((menu, index) => {
          return (
            <div key={index} className="w-full sm:w-6/12 xl:w-3/12 px-4">
              <div className="flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 className="text-blueGray-400 font-bold text-xs">
                        Total {menu.entry}
                      </h5>
                      <span className="font-semibold text-xl text-blueGray-700">
                        {menu.entry === 'Sales' ? `₹${menu.count}` : menu.count}
                      </span>
                    </div>
                    <div className="w-auto pl-4 flex-initial">
                      <div
                        className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow rounded-full ${menu.twColor}`}
                      >
                        <FontAwesomeIcon icon={menu.icon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap mt-12">
        <div className="w-full xl:w-6/12 px-4">
          <BarChart />
        </div>
        <div className="w-full xl:w-6/12 mt-12 xl:mt-0 px-4">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Home;

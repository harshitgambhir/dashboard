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
      <div className="flex flex-wrap -mx-2">
        {data.map((menu, index) => {
          return (
            <div key={index} className="w-full sm:w-6/12 xl:w-3/12 my-2 px-2">
              <div className="flex flex-col min-w-0 break-words bg-white rounded shadow">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="w-full pr-4 max-w-full flex-grow flex-1">
                      <div className="text-blueGray-600 font-bold text-xs">
                        Total {menu.entry}
                      </div>
                      <div className="mt-1 font-black text-3xl text-blueGray-700">
                        {menu.entry === 'Sales' ? `₹${menu.count}` : menu.count}
                      </div>
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
      <div className="flex flex-wrap -mx-2 mt-4">
        <div className="w-full xl:w-6/12 my-2 px-2">
          <BarChart title="Total orders" data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: new Date().getFullYear(),
                backgroundColor: "#a855f7",
                borderColor: "#a855f7",
                data: [30, 78, 56, 34, 100, 45, 13],
                fill: false,
                barThickness: 8,
              },
              {
                label: new Date().getFullYear() - 1,
                fill: false,
                backgroundColor: "#38bdf8",
                borderColor: "#38bdf8",
                data: [27, 68, 86, 74, 10, 4, 87],
                barThickness: 8,
              },
            ],
          }}/>
        </div>
        <div className="w-full xl:w-6/12 my-2 px-2">
          <LineChart title="Total sales" data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: new Date().getFullYear(),
                backgroundColor: "#a855f7",
                borderColor: "#a855f7",
                data: [65, 78, 66, 44, 56, 67, 75],
                fill: false,
              },
              {
                label: new Date().getFullYear() - 1,
                fill: false,
                backgroundColor: "#38bdf8",
                borderColor: "#38bdf8",
                data: [40, 68, 86, 74, 56, 60, 87],
              },
            ],
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

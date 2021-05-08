import React, { useContext } from "react";
import Table from "../../components/Table";
import { DataContext } from "../../context/DataContext";
import moment from 'moment';

const Orders = () => {
  const { orders } = useContext(DataContext);

  const columns = [
    {
      name: "Number",
      dataKey: "number",
      render: number => <span>#{number}</span>,
    },
    {
      name: "Items",
      dataKey: "items",
    },
    {
      name: "Total",
      dataKey: "total",
      render: total => <span>₹{total}</span>,
    },
    {
      name: "Date",
      dataKey: "date",
      render: date => <span>{moment(date).format('DD/MM/YY, HH:mm:ss')}</span>,
    },
    {
      name: "Status",
      dataKey: "status",
      render: status => {
        return(
          status === 'Paid' ? (
            <div
              className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
            >
              {status}
            </div>
          ) : (
            <div
              className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
            >
              {status}
            </div>
          )
        )
      },
    }
  ];

  return (
    <div className="px-4 md:px-10 mx-auto w-full">
      <div className="w-full">
        <Table
          title="Orders"
          columns={columns}
          data={orders}
        ></Table>
      </div>
    </div>
  );
};

export default Orders;

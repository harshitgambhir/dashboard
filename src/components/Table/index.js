import React from "react";

const Table = ({title, extra, columns, data}) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              {title}
            </h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            {extra}
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
                {
                    columns.map((column) => (
                        <th key={column.dataKey} className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            {column.name}
                        </th>
                    ))
                }
            </tr>
          </thead>
          <tbody>
            {
                data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column, index) => {
                          if(column.dataKey === 'action'){
                            return (
                              <td key={index} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                {column.render(row)}
                              </td>
                            )
                          }
                          return (
                            <td key={index} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {column.render ? column.render(row[column.dataKey]) : row[column.dataKey]}
                            </td>
                          )
                        })}
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;

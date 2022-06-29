import React from "react";

const TableProvider = ({ tableData, tableHeaders }) => {
  return (
    <table className="table-auto w-full text-center">
      <thead className="text-[#98A8B3]">
        <tr>
          {Object(tableHeaders).map((header) => (
            <th className="whitespace-nowrap pl-2" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, i) => (
          <tr className="odd:bg-[#29A37F24]">
            <td>{i}</td>
            {Object.values(rowData).map((val) =>
              val ? (
                typeof val == "object" ? (
                  <td>
                    {Object.keys(val).map((k) => (
                      <div className="after:content-['(or)'] last:after:hidden">
                        {val}
                      </div>
                    ))}
                  </td>
                ) : (
                  <td>{val}</td>
                )
              ) : (
                <td>-</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProvider;

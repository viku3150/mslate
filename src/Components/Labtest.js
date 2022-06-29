import React from "react";
import TableProvider from "./Utils/TableProvider";

const Labtest = ({ lab_data }) => {
  return (
    <TableProvider
      tableData={lab_data}
      tableHeaders={["S.NO", "NAME", "PRICE", "DISCOUNT", "GST", "TOTAL"]}
    />
  );
};

export default Labtest;

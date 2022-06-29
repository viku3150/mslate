import React from "react";
import TableProvider from "./Utils/TableProvider";

const AlternateMeds = ({ alt_data }) => {
  return (
    <TableProvider
      tableData={alt_data}
      tableHeaders={[
        "S.NO",
        "PRESCRIBED MEDICINE",
        "APPROVED SUBSTITUTE",
        "WARNINGS",
      ]}
    />
  );
};

export default AlternateMeds;

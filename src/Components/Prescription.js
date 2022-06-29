import React from "react";
import TableProvider from "./Utils/TableProvider";

const Prescription = ({ pres_data }) => {
  return (
    <TableProvider
      tableData={pres_data}
      tableHeaders={[
        "S.NO",
        "MEDICINE NAME",
        "DOSAGE",
        "FREQ",
        "DURATION",
        "INSTRUCTIONS",
      ]}
    />
  );
};

export default Prescription;

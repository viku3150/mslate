import React from "react";
import AlternateMeds from "./AlternateMeds";
import GeneralAdvice from "./GeneralAdvice";
import Labtest from "./Labtest";
import Prescription from "./Prescription";
import Symtoms from "./Symtoms";
import PatientData from "./Utils/PatientData";

const Patient = () => {
  const data = PatientData;

  return (
    <div className="px-5">
      <header className="border-b-2 mb-5 flex items-center justify-between py-5">
        <img src="/image 119(1).png" className="h-16" alt="" />
        <span>{data.doctor_name}</span>
      </header>
      <div className="space-x-2">
        <span>Patient Name:</span>
        <span>{`${data.patient_name}, ${data.age} (${data.gender})`}</span>
      </div>
      <div className="mt-5 font-medium">Symptoms:</div>
      <Symtoms
        symtomsData={data.symptoms}
        fd={data["Final Diagnosis"]}
        fx={data.Fx}
        px={data.Px}
      />
      <div className="mt-10 mb-3 font-medium">Prescription</div>
      <Prescription pres_data={data.Prescription} />
      <div className="mt-10 mb-3 font-medium">Lab Tests</div>
      <Labtest lab_data={data["Lab Tests"]} />
      <div className="mt-10 mb-3 font-medium">Approved Alternate Medicines</div>
      <AlternateMeds alt_data={data["Approved Alternate Medicines"]} />
      <div className="mt-10 mb-3 font-medium">General Advice</div>
      <GeneralAdvice advice={data.Advice} />
    </div>
  );
};

export default Patient;

import React from "react";

const GeneralAdvice = ({ advice }) => {
  return (
    <ul className="list-disc ml-10">
      {advice.map((ad) => (
        <li>{ad}</li>
      ))}
    </ul>
  );
};

export default GeneralAdvice;

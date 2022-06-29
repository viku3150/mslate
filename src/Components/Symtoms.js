import React from "react";

const Symtoms = ({ symtomsData, fd, px, fx }) => {
  return (
    <div className="grid grid-cols-2 w-[100vw] mb-5">
      {symtomsData.map((title, i) => {
        return (
          <div className="mt-2" key={i}>
            {Object.keys(title).map((j) => (
              <div key={j}>
                {j !== "disease" ? (
                  <div className="space-x-1">
                    <span>{j}:</span>
                    <span className="text-[#297AA3]">{title[j]}</span>
                  </div>
                ) : (
                  <span>{title[j]}</span>
                )}
              </div>
            ))}
          </div>
        );
      })}
      <div className="mt-5 grid grid-cols-2 w-[100vw]">
        <div className="my-auto">
          <span>Final Diagnosis:</span>
          {fd.map((fd_data) => (
            <span className="ml-3 text-[#297AA3]">{fd_data}</span>
          ))}
        </div>
        <div>
          <div>
            <span>Fx:</span>
            {fx.map((fx_data) => (
              <span className="ml-3 text-[#297AA3]">{fx_data}</span>
            ))}
          </div>
          <div>
            <span>PX:</span>
            {px.map((px_data) => (
              <span className="ml-3 text-[#297AA3]">{px_data}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symtoms;

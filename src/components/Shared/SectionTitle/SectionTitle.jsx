import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mx-auto">
      <p className="text-yellow-500 text-md italic">---{subHeading}---</p>
      <h2 className="uppercase text-3xl mx-auto mt-2 font-medium border-y-[3px] w-72 py-3  mb-3">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;

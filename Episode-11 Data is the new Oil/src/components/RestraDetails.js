import { useState } from "react";
import DetailList from "./DetailList";

const RestraDetails = ({ data, show, setShowIndex }) => {
  const handleClick = () => {
    console.log("clicked");
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-2 shadow-lg bg-gray-50">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {show && <DetailList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestraDetails;

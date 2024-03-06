import React from "react";
import { useState } from "react";
import RestraCard from "./RestraCard";
import { DataList } from "../utils/DataList";

const Body = () => {
  // Local State Varialble - Super Powerful variable
  const [listrestra, setlistrestra] = useState(DataList);

  // // Normal JS Variable
  // let listrestra = [];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listrestra.filter((res) => res.avgRating > 4.3);
            console.log(filterList, "filterList");
            setlistrestra(filterList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restra-container">
        {/* Restra card */}
        {
          listrestra.map((restra) => (
            <RestraCard key={restra?.id} resData={restra} />
          ))
          // Not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id(best practice)
        }
        {/* <RestraCard resData={dataList[0]} />
          <RestraCard resData={dataList[1]} />
          <RestraCard resData={dataList[2]} />
          <RestraCard resData={dataList[3]} />
          <RestraCard resData={dataList[4]} />
          <RestraCard resData={dataList[5]} />
          <RestraCard resData={dataList[6]} /> */}{" "}
        {/* Another way to do multiple card but it is static */}
        {/* <RestraCard restraName="Taj Hotel" cuisine="Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;

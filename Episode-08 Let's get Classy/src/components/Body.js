import React from "react";
import { useState, useEffect } from "react";
import RestraCard from "./RestraCard";
import Shimmer from "./Shimmer";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Varialble - Super Powerful variable
  const [listrestra, setlistrestra] = useState([]);
  const [filteredRestra, setFilteredRestra] = useState([]);

  const [searcText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    console.log(json);

    setlistrestra(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestra(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // // Normal JS Variable
  // let listrestra = [];

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searcText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restra card and update the UI
              console.log(searcText);
              const searchrestra = listrestra.filter((res) =>
                res.info.name.toLowerCase().includes(searcText.toLowerCase())
              );

              setFilteredRestra(searchrestra);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listrestra.filter((res) => res.avgRating > 4.0);
            console.log(filterList, "filterList");
            setlistrestra(filterList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      {listrestra.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restra-container">
          {/* Restra card */}
          {
            filteredRestra.map((restra) => (
              <Link to={"restaurants/" + restra?.info.id} key={restra?.info.id}>
                {" "}
                <RestraCard resData={restra} />{" "}
              </Link>
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
      )}
    </div>
  );
};

export default Body;

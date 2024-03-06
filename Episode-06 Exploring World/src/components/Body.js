import React from "react";
import { useState, useEffect } from "react";
import RestraCard from "./RestraCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Varialble - Super Powerful variable
  const [listrestra, setlistrestra] = useState([]);
  const [filteredRestra, setFilteredRestra] = useState([]);

  const [searcText, setSearchText] = useState("");

  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440230760601235&lng=78.35651591420175&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
              <RestraCard key={restra?.info.id} resData={restra} />
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

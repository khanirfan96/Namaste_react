import React from "react";
import { useState, useEffect, useContext } from "react";
import RestraCard, { withPromotedLabel } from "./RestraCard";
import Shimmer from "./Shimmer";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useMainApi from "../utils/useMainApi";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // Local State Varialble - Super Powerful variable
  const [listrestra, setlistrestra] = useState([]);
  const [filteredRestra, setFilteredRestra] = useState([]);

  const [searcText, setSearchText] = useState("");

  const RestraCardPromoted = withPromotedLabel(RestraCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered", listrestra);

  console.log(useMainApi(), "yuyu");
  const data = useMainApi();
  console.log(data, "yty");

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're Offline!! Check your internet connection...</h1>
    );
  }

  // // Normal JS Variable
  // let listrestra = [];

  const { setUserName, loggedinUser } = useContext(UserContext);

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searcText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filterList = listrestra.filter(
                (res) => res.avgRating > 4.0
              );
              console.log(filterList, "filterList");
              setlistrestra(filterList);
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black m-2 p-2"
            value={loggedinUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      {listrestra.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {/* Restra card */}
          {
            filteredRestra.map((restra) => (
              <Link to={"restaurants/" + restra?.info.id} key={restra?.info.id}>
                {" "}
                {restra?.info.isOpen ? (
                  <RestraCardPromoted resData={restra} />
                ) : (
                  <RestraCard resData={restra} />
                )}
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

import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestraCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  const {loggedinUser} = useContext(UserContext);

  // const RestraCard = ({restraName, cuisine}) => { //we can fetch dynamic data this way also

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="rounded-lg" alt="wda" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{loggedinUser}</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard  ==>  RestaurantCardPromoted

export const withPromotedLabel = (RestraCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestraCard {...props} />
      </div>
    );
  };
};
export default RestraCard;

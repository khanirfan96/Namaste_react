import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestraMenu from "../utils/useRestraMenu";

const RestraMenu = () => {
  // const [jsondata, setJsonData] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestraMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards, "tetet");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h2>{avgRating}</h2>
      <h2> Menu </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestraMenu;

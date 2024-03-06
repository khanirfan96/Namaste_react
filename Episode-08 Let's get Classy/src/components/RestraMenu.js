import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestraMenu = () => {
  const [jsondata, setJsonData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setJsonData(json.data);
    console.log(json.data, "eeye");
  };

  if (jsondata === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    jsondata.cards[0]?.card?.card?.info;

  const { itemCards } =
    jsondata.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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

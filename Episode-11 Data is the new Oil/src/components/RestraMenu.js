import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestraMenu from "../utils/useRestraMenu";
import RestraDetails from "./RestraDetails";

const RestraMenu = () => {
  // const [jsondata, setJsonData] = useState(null);
  // const [show, setShow] = useState(false);

  const { resId } = useParams();

  const resInfo = useRestraMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories, "categories");

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        // controlled component
        <RestraDetails
          key={category?.card?.card.title}
          data={category?.card?.card}
          show={index === showIndex ? true : false}
          setShowIndex={() => {
            if (index != showIndex) {
              setShowIndex(index);
            } else {
              setShowIndex(null);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestraMenu;

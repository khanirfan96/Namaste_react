import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search panel
 *  - Card
 *      - RestuarantContainer
 *      - img
 *      - Name of res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 **/



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKt-eOeXuwOjSZN5Pv34BmYKk51BTQE0Fnk1rP13smsQT6zNM_dn7t1MK1FQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const RestraCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name, cuisines, avgRating, costForTwo, deliveryTime } = resData;

  console.log(resData, 'idoiaod');

  // const RestraCard = ({restraName, cuisine}) => { //we can fetch dynamic data this way also

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="wda"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const dataList = [
  {
    id: "27447",
    name: "Pista House Restaurant & Bakery",
    cloudinaryImageId: "v7btfi5brrsijry8j02n",
    locality: "Kondapur",
    areaName: "Kondapur",
    costForTwo: "₹500 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Chinese",
      "Kebabs",
      "Mughlai",
      "Tandoor",
    ],
    avgRating: 4.2,
    parentId: "457788",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 20,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "20 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹179",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "345899",
    name: "Theobroma",
    cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
    locality: "Gachibowli",
    areaName: "Gachibowli",
    costForTwo: "₹400 for two",
    cuisines: ["Desserts"],
    avgRating: 4.5,
    parentId: "1040",
    avgRatingString: "4.5",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 13,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      slaString: "13 mins",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "ABOVE ₹159",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "244361",
    name: "Starbucks Coffee",
    cloudinaryImageId: "0c958153eeb436db6d515ca36e47e8a4",
    locality: "The Platina",
    areaName: "Gachibowli",
    costForTwo: "₹400 for two",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Bakery",
      "Ice Cream",
    ],
    avgRating: 4.4,
    parentId: "195515",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 3.5,
      serviceability: "SERVICEABLE",
      slaString: "21 mins",
      lastMileTravelString: "3.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "373101",
    name: "California Burrito",
    cloudinaryImageId: "uigq1czwjmymojslwihf",
    locality: "Kondapur",
    areaName: "Kondapur",
    costForTwo: "₹250 for two",
    cuisines: [
      "Mexican",
      "American",
      "Salads",
      "Continental",
      "Keto",
      "Healthy Food",
    ],
    avgRating: 4.6,
    parentId: "1252",
    avgRatingString: "4.6",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "22 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "33040",
    name: "Shah Ghouse Hotel & Restaurant",
    cloudinaryImageId: "hnx9nazpxdpqpypjo8ld",
    locality: "Bio-Diversity Park",
    areaName: "Hitec City",
    costForTwo: "₹350 for two",
    cuisines: ["Biryani", "North Indian", "Chinese", "Mughlai", "Tandoor"],
    avgRating: 4.1,
    parentId: "19271",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹179",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "17100",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Bal Schander",
    areaName: "Bal Schander",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.1,
    parentId: "547",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 16,
      lastMileTravel: 2.2,
      serviceability: "SERVICEABLE",
      slaString: "16 mins",
      lastMileTravelString: "2.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "256893",
    name: "McDonald's",
    cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
    locality: "Hyderabad Kondapur LG",
    areaName: "Forest Dept Colony",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.2,
    parentId: "630",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "21 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 22:45:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "129541",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Capital Mall",
    areaName: "Forest Dept Colony",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4,
    parentId: "166",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "31 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "27107",
    name: "Istah - The Mediterranean Way",
    cloudinaryImageId: "67d4a416bf932f850b0a15ad33aae762",
    locality: "Gachibowli Road",
    areaName: "Kondapur",
    costForTwo: "₹250 for two",
    cuisines: [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
      "Kebabs",
      "Arabian",
      "Lebanese",
      "Beverages",
      "Desserts",
      "Italian",
      "Turkish",
    ],
    avgRating: 4.3,
    parentId: "3518",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "23 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "24610",
    name: "Domino's Pizza",
    cloudinaryImageId: "g4tw1ih7m1vtq8kvckc7",
    locality: "Ranga Reddy District",
    areaName: "Gachibowli",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.1,
    parentId: "2456",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 02:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "156449",
    name: "The Good Bowl",
    cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
    locality: "Gachibowli Village",
    areaName: "Gachibowli",
    costForTwo: "₹400 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Pastas",
      "Punjabi",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
    parentId: "7918",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "17 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "416047",
    name: "EatFit",
    cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
    locality: "Sri Mytri Square Opp.Sarath City Mall",
    areaName: "Kohtaguda",
    costForTwo: "₹270 for two",
    cuisines: [
      "Chinese",
      "Healthy Food",
      "Tandoor",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani",
    ],
    avgRating: 4.3,
    parentId: "76139",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "22 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "brand",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "12156",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "Beeco Arcade",
    areaName: "Gachibowli",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.1,
    parentId: "2",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      slaString: "21 mins",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 00:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "86073",
    name: "Homely",
    cloudinaryImageId: "o61tveobb2dldb9e4pjq",
    locality: "Gachibowli Road",
    areaName: "Hitec City",
    costForTwo: "₹200 for two",
    cuisines: [
      "Home Food",
      "North Indian",
      "South Indian",
      "Beverages",
      "Desserts",
      "Thalis",
    ],
    avgRating: 4.3,
    parentId: "4043",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "21 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 16:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "C",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "86074",
    name: "The Bowl Company",
    cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
    locality: "Gachibowli Road",
    areaName: "Kondapur",
    costForTwo: "₹300 for two",
    cuisines: [
      "Pan-Asian",
      "Continental",
      "North Indian",
      "Desserts",
      "American",
      "Asian",
      "Beverages",
      "Biryani",
      "Chinese",
      "European",
      "Grill",
      "Hyderabadi",
      "Indian",
      "Italian",
      "Kebabs",
      "Lucknowi",
      "Mediterranean",
      "Mexican",
      "Mughlai",
      "Oriental",
      "Pastas",
      "Punjabi",
      "Raja",
    ],
    avgRating: 4.2,
    parentId: "4317",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "22 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "20215",
    name: "Chai Point",
    cloudinaryImageId: "p4znxkstyrdobxwl6rxa",
    locality: "Raheja Mindspace",
    areaName: "Madhapur",
    costForTwo: "₹150 for two",
    cuisines: [
      "Bakery",
      "Beverages",
      "Maharashtrian",
      "Snacks",
      "Street Food",
      "South Indian",
      "Punjabi",
      "Chaat",
      "Indian",
      "American",
      "North Indian",
      "Fast Food",
      "Desserts",
      "Cafe",
      "Healthy Food",
      "Home Food",
    ],
    avgRating: 4,
    parentId: "1607",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "28 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-26 00:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "227381",
    name: "CakeZone",
    cloudinaryImageId: "fc43011c7623957c8c4e3588a1e6ba21",
    locality: "Rangareddi",
    areaName: "VATTINAGULAPALLI",
    costForTwo: "₹200 for two",
    cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
    avgRating: 4.2,
    parentId: "7003",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 4.9,
      serviceability: "SERVICEABLE",
      slaString: "24 mins",
      lastMileTravelString: "4.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 02:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "127321",
    name: "Taco Bell",
    cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
    locality: "Saraths City Capital Shopping Mall",
    areaName: "Forest Dept Colony",
    costForTwo: "₹300 for two",
    cuisines: ["Mexican"],
    avgRating: 3.8,
    parentId: "1557",
    avgRatingString: "3.8",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "36 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "11094",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Serilingampally Mandal",
    areaName: "Gachibowli",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.8,
    parentId: "721",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-20 03:55:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "14988",
    name: "Faasos - Wraps, Rolls & Shawarma",
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    locality: "Gachibowli Village",
    areaName: "Gachibowli",
    costForTwo: "₹200 for two",
    cuisines: [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.3,
    parentId: "21809",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-19 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

// Not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id(best practice)

const Body = () => {
  return (
   
    <div className="body">
      <div className="search">Search</div>
      <div className="restra-container">
        {/* Restra card */}
        {
          
          dataList.map(restra => (<RestraCard key = {restra?.id} resData={restra}/>))
          
        }
        {/* <RestraCard resData={dataList[0]} />
        <RestraCard resData={dataList[1]} />
        <RestraCard resData={dataList[2]} />
        <RestraCard resData={dataList[3]} />
        <RestraCard resData={dataList[4]} />
        <RestraCard resData={dataList[5]} />
        <RestraCard resData={dataList[6]} /> */} {/* Another way to do multiple card but it is static */}
        {/* <RestraCard restraName="Taj Hotel" cuisine="Fast Food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// Config Driven UI = Our website is driven by data is called Config Driven UI.

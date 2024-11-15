import React from 'react'

const RestaurantCard = (props) => {
  console.log(props);
  const {resData} = props;
  const {name, cuisines, avgRating, costForTwo} = resData?.info;
  return (
      <div className='res-card p-2 w-[25%] border'>
          <img className="w-[200] h-[130] pb-1" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
          <h3>{name}</h3>
          <h3>{cuisines.join(', ')}</h3>
          <h3>{avgRating} stars</h3>
          <h3>{costForTwo}</h3>
          <h3>{resData.info.sla.deliveryTime} Minuts</h3>
      </div>
  )
}

const resList = [ {
  "info": {
    "id": "7203",
    "name": "Taj Mahal-Abids",
    "cloudinaryImageId": "8aa874a03b5bd0804b6781b1fd13f02d",
    "locality": "Abids",
    "areaName": "Abids",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Biryani",
      "Snacks"
    ],
    "avgRating": 4.5,
    "parentId": "924",
    "avgRatingString": "4.5",
    "totalRatingsString": "63K+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "18K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/taj-mahal-abids-abids-rest7203",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "27739",
    "name": "Cafe Niloufer Classic",
    "cloudinaryImageId": "1171b83d63d7c203e5f1c3e16980cd89",
    "locality": "Oshiwara",
    "areaName": "Red Hills",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Bakery",
      "Beverages",
      "Snacks",
      "Desserts"
    ],
    "avgRating": 4.7,
    "parentId": "466854",
    "avgRatingString": "4.7",
    "totalRatingsString": "143K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/cafe-niloufer-classic-oshiwara-red-hills-rest27739",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "262087",
    "name": "Imperial Multicuisine Restaurant",
    "cloudinaryImageId": "rqlwvsmzcfxbg9u6ajgm",
    "locality": "Banjara Hills",
    "areaName": "Redhills",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Biryani",
      "Chinese",
      "Indian",
      "Kebabs",
      "Tandoor"
    ],
    "avgRating": 4.3,
    "parentId": "543714",
    "avgRatingString": "4.3",
    "totalRatingsString": "20K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 3.6,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "3.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹100 OFF",
      "subHeader": "ABOVE ₹499",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "6498",
    "name": "Hotel Sandarshini",
    "cloudinaryImageId": "9f5783b9975a73ec001560327065a01c",
    "locality": "Masab Tank",
    "areaName": "Masab Tank",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Chinese",
      "South Indian",
      "Juices"
    ],
    "avgRating": 4.5,
    "parentId": "476",
    "avgRatingString": "4.5",
    "totalRatingsString": "103K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 3.9,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.0",
        "ratingCount": "2.3K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/hotel-sandarshini-masab-tank-rest6498",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "2770",
    "name": "Flavours of Taj Mahal Hotel",
    "cloudinaryImageId": "8aa874a03b5bd0804b6781b1fd13f02d",
    "locality": "SD Road",
    "areaName": "Kalasiguda",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Biryani",
      "Snacks"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "80508",
    "avgRatingString": "4.6",
    "totalRatingsString": "53K+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 4.7,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "4.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹75 OFF",
      "subHeader": "ABOVE ₹449",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/flavours-of-taj-mahal-hotel-sd-road-kalasiguda-rest2770",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "2535",
    "name": "Agra Sweets Banjara",
    "cloudinaryImageId": "ydsyhgg51xaxsrjbaxdv",
    "locality": "Masab Tank",
    "areaName": "Masab Tank",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Sweets",
      "Desserts",
      "Chaat",
      "Snacks",
      "Beverages"
    ],
    "avgRating": 4.5,
    "parentId": "34",
    "avgRatingString": "4.5",
    "totalRatingsString": "95K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 3.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "3.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "1.4K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-masab-tank-rest2535",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "7003",
    "name": "Almond House",
    "cloudinaryImageId": "sewngcxy3c0h9atmav2l",
    "locality": "Himayath Nagar",
    "areaName": "Himayath Nagar",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Sweets",
      "Desserts",
      "Snacks",
      "Beverages"
    ],
    "avgRating": 4.8,
    "parentId": "40",
    "avgRatingString": "4.8",
    "totalRatingsString": "19K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 1.1,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "1.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-11-15 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.8",
        "ratingCount": "7.5K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-687713df-cfab-4e3f-a3e2-eb1feb760ba6"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/almond-house-himayath-nagar-rest7003",
    "type": "WEBLINK"
  }
},]

const Home = () => {
  return (
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container flex'>
          {/* <RestaurantCard resName="Varalakshmi Tiffins" cuisine="Idly, Masala Dosa"/> */}
          {/* <RestaurantCard resData={resList[1]}/>
          <RestaurantCard resData={resList[2]}/>
          <RestaurantCard resData={resList[3]}/>
          <RestaurantCard resData={resList[4]}/>
          <RestaurantCard resData={resList[5]}/>
          <RestaurantCard resData={resList[6]}/> */}
          {resList.map((restuarant) => (
            <RestaurantCard key={restuarant.info.id} resData = {restuarant}/>
          ))}
        </div>
    </div>
  )
}

export default Home
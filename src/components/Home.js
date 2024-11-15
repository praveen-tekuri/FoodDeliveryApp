import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
      fetchData();
  },[])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  // conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className='body'>
        <div className='filter my-5'>
          <button onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            )
            setListOfRestaurants(filteredList);
          }} className='p-3  bg-slate-100 border-gray-900'>Top Rated Restaurants</button>
        </div>
        <div className='res-container flex flex-wrap justify-between'>
          {listOfRestaurants.map((restuarant) => (
            <RestaurantCard key={restuarant?.info?.id} resData = {restuarant}/>
          ))}
        </div>
    </div>
  )
}

export default Home
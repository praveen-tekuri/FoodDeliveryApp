import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStaus from '../utils/useOnlineStatus';

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Home rendered");
  
  const onlineStatus = useOnlineStaus();
  
  useEffect(() => {
      fetchData();
  },[])
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  if(onlineStatus === false) return <h1 className='text-2xl font-bold my-3 text-red-500'>Looks like you're offline! Please check your internet connection.</h1>
  
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className='body'>
        <div className='filter my-5 flex justify-between'>
          <div className='search'>
              <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className='border border-gray-900 h-[48px] w-[300px]' type='text'/>
              <button onClick={() => {
                // Filter restaurant cards and update the UI
                // searchText
                console.log(searchText);
                const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRes);
              }} className='bg-slate-100 py-3 px-8'>Search</button>
            </div>
            <button onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              )
              setFilteredRestaurant(filteredList);
            }} className='p-3  bg-slate-100 border-gray-900'>Top Rated Restaurants</button>
          <h2>Restaurants {filteredRestaurant.length}</h2>
        </div>
        <div className='res-container flex flex-wrap justify-between'>
          {filteredRestaurant.map((restuarant) => (
            <Link key={restuarant?.info?.id} to={"/restaurants/" + restuarant.info.id}><RestaurantCard resData = {restuarant}/></Link>
          ))}
        </div>
    </div>
  )
}

export default Home
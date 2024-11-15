import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
    <div className='body'>
        <div className='filter py-2'>
          <button onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            )
            setListOfRestaurants(filteredList);
          }} className='p-3  bg-slate-100 border-gray-900'>Top Rated Restaurants</button>
        </div>
        <div className='res-container flex'>
          {listOfRestaurants.map((restuarant) => (
            <RestaurantCard key={restuarant.info.id} resData = {restuarant}/>
          ))}
        </div>
    </div>
  )
}

export default Home
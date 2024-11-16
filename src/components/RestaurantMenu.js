import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

//   console.log(resId);
//   console.log(resInfo);
  
  if(resInfo === null) return <Shimmer/>

  const {name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);
  
  return (
    <div className='menu text-center'>
        <h1 className='font-bold my-5 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.map((category) => <RestaurantCategory key={category?.card?.card?.title} resCategoryData={category?.card?.card}/>)}
    </div>
  )
}
export default RestaurantMenu;
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className='res-card p-2 w-[25%] border'>
            <img className="w-[200] h-[130] pb-1" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{resData.info.sla.deliveryTime} Minuts</h3>
        </div>
    )
  }
  export default RestaurantCard;
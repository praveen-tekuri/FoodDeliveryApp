import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className='res-card p-2 w-[250px] border mb-5'>
            <img className="w-[100%] h-[130] pb-1" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{resData.info.sla.deliveryTime} Minuts</h3>
        </div>
    )
  }

// HOC
// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Availability: Opened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;



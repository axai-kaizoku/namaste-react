import { Link } from "react-router"
import { BASE_IMG_URL } from "../utils/constants"

export const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = props?.info
  return (
    <Link to={"/restaurant/" + props?.info?.id}>
      <div className="res-card">
        <img width="240" height="260" src={BASE_IMG_URL + cloudinaryImageId} alt="food" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} stars</h5>
        <h6>{sla?.deliveryTime} minutes</h6>
      </div>
    </Link>
  )
}

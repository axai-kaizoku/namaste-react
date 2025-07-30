import { data } from "../constants"
import { RestaurantCard } from "./restaurant-card"

export const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        {data?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} info={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}

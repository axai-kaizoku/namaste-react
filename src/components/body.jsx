import { data } from "../utils/mock-data"
import { RestaurantCard } from "./restaurant-card"
import { useState } from "react"

export const Body = () => {
  const mockData = data.map((res) => {
    if (res.info.name.includes("Pizza")) {
      res.info.avgRating = 3
    }
    return res
  })

  const [resData, setResData] = useState(mockData)

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filtered = mockData.filter((res) => res.info.avgRating > 4)
            setResData(filtered)
          }}
        >
          Ratings above 4
        </button>
      </div>
      <div className="res-container">
        {resData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} info={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}

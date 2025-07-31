import { data } from "../utils/mock-data"
import { RestaurantCard } from "./restaurant-card"
import { useState, useEffect } from "react"

export const Body = () => {
  const [resData, setResData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const data = await res.json()

    setResData(data.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            // const filtered = mockData.filter((res) => res.info.avgRating > 4)
            // setResData(filtered)
          }}
          className="filter-btn"
        >
          Ratings above 4
        </button>
      </div>
      <div className="res-container">
        {resData?.length === 0 ? (
          <Skeleton />
        ) : (
          resData?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} info={restaurant?.info} />)
        )}
      </div>
    </div>
  )
}

function Skeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4, 69, 90, 6, 67].map((restaurant) => (
        <div key={restaurant} className="res-card-skeleton"></div>
      ))}
    </>
  )
}

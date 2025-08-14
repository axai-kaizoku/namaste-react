import { useEffect, useState } from "react"
import { useOnlineStatus } from "../hooks/use-online-status"
import { BASE_ALL_RESTAURANTS_URL } from "../utils/constants"
import { RestaurantCard } from "./restaurant-card"

export const Body = () => {
  const [resData, setResData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchText, setSearchText] = useState("")

  const onlineState = useOnlineStatus()

  // When ever a state variable changes, react re-renders the component
  // console.log("Body rendered")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const res = await fetch(BASE_ALL_RESTAURANTS_URL)

    const data = await res.json()

    let restaurantsData = data.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants

    if (!data.data?.cards[1].card.card.gridElements) {
      restaurantsData = data.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    }

    setResData(restaurantsData)
    setFiltered(restaurantsData)
  }

  if (!onlineState) {
    return (
      <div>
        <h1 className="text-center">Look's like you've gone offline !!</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="search bg-amber-50 dark:bg-amber-300">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const filtered = resData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

            setFiltered(filtered)
          }}
        >
          <input
            type="search"
            name="search"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-box"
            placeholder="Search anything..."
          />
          <button type="submit">Search</button>
        </form>
        <button
          onClick={() => {
            // const filtered = mockData.filter((res) => res.info.avgRating > 4)
            // setResData(filtered)
          }}
          className="btn"
        >
          Ratings above 4
        </button>
      </div>
      <div className="res-container">
        {resData?.length === 0 ? (
          <Skeleton />
        ) : (
          filtered?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} info={restaurant?.info} />)
        )}
      </div>
    </div>
  )
}

export function Skeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4, 69, 90, 6, 67].map((restaurant) => (
        <div key={restaurant} className="res-card-skeleton skeleton"></div>
      ))}
    </>
  )
}

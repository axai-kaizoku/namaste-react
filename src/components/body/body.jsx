import { useEffect, useState } from "react"
import { useOnlineStatus } from "../../hooks/use-online-status"
import { BASE_ALL_RESTAURANTS_URL } from "../../utils/constants"
import { RestaurantCard, withPromtedLabel } from "./../restaurant-card"

export const Body = () => {
  const [resData, setResData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchText, setSearchText] = useState("")
  const [error, setError] = useState(false)

  const onlineState = useOnlineStatus()

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard)

  // When ever a state variable changes, react re-renders the component
  // console.log("Body rendered")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const res = await fetch(BASE_ALL_RESTAURANTS_URL)

      const data = await res.json()

      let restaurantsData = data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      if (!data.data?.cards[1].card.card.gridElements) {
        restaurantsData = data.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
      }

      setResData(restaurantsData)
      setFiltered(restaurantsData)
    } catch {
      setError(true)
    }
  }

  if (error) {
    return <h1 className="text-center text-5xl font-semibold">Error fetching data !</h1>
  }

  if (!onlineState) {
    return (
      <div>
        <h1 className="text-center">Look's like you've gone offline !!</h1>
      </div>
    )
  }

  return (
    <main className="w-full min-w-0 h-full space-y-5">
      <div className="w-full flex">
        <form
          className="w-full flex gap-2 h-fit"
          onSubmit={(e) => {
            e.preventDefault()
            const filtered = resData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

            setFiltered(filtered)
          }}
        >
          <input
            type="text"
            name="search"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 border border-input rounded-md max-w-48"
            placeholder="Search anything..."
          />
          <button type="submit" className="p-2 border rounded-md">
            Search
          </button>
        </form>
        <button
          onClick={() => {
            // const filtered = mockData.filter((res) => res.info.avgRating > 4)
            // setResData(filtered)
          }}
          className="p-2 border rounded-md h-fit w-fit whitespace-nowrap hidden sm:block"
        >
          Ratings above 4
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 items-start  gap-3 h-full w-full">
        {resData?.length === 0 ? (
          <Skeleton />
        ) : (
          filtered?.map((restaurant) =>
            restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted key={restaurant?.info?.id} info={restaurant?.info} />
            ) : (
              <RestaurantCard key={restaurant?.info?.id} info={restaurant?.info} />
            )
          )
        )}
      </div>
    </main>
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

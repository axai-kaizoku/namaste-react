import { useEffect, useState } from "react"
import { useOnlineStatus } from "../../hooks/use-online-status"
import { BASE_ALL_RESTAURANTS_URL } from "../../utils/constants"
import { RestuarantCardsGrid } from "./body-grid"
import { BodyHeader } from "./body-header"

export const Body = () => {
  const [resData, setResData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchText, setSearchText] = useState("")

  const onlineState = useOnlineStatus()

  // When ever a state variable changes, react re-renders the component
  // console.log("Main Body rendered")

  useEffect(() => {
    fetchData()
    // console.log("Main Body, useEffect")
  }, [])

  async function fetchData() {
    const res = await fetch(BASE_ALL_RESTAURANTS_URL)

    const data = await res.json()

    let restaurantsData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    if (!data?.data?.cards[1].card.card.gridElements) {
      restaurantsData = data.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    }

    setResData(restaurantsData)
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
      <BodyHeader
        setFiltered={setFiltered}
        resData={resData}
        searchText={searchText}
        setSearchText={setSearchText}
        filtered={filtered}
      />
      <RestuarantCardsGrid loading={resData?.length === 0} data={filtered} />
      {resData?.length ? <CursorBasedPagination data={resData} setFiltered={setFiltered} /> : null}
      {/* {resData?.length ? <BodyPagination data={resData} setFiltered={setFiltered} /> : null} */}
    </main>
  )
}

export const CursorBasedPagination = ({ data: ogData, setFiltered }) => {
  const pageSize = 5
  const data = ogData?.map((e, i) => ({ ...e, pId: i + 1 }))
  const [size, setSize] = useState(pageSize)

  useEffect(() => {
    const slicedData = data?.slice(0, size)
    setFiltered(slicedData)
  }, [size])

  return (
    <div className="w-full flex justify-center items-center">
      <button
        disabled={data?.length <= size}
        onClick={() => {
          if (data?.length >= size) {
            // console.log("load more called !")
            setSize((prev) => prev + 5)
          }
        }}
        className={"disabled:cursor-not-allowed"}
      >
        Load More
      </button>
    </div>
  )
}

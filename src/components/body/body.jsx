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
  console.log("Main Body rendered")

  useEffect(() => {
    fetchData()
    console.log("Main Body, useEffect")
  }, [])

  async function fetchData() {
    const res = await fetch(BASE_ALL_RESTAURANTS_URL)

    const data = await res.json()

    let restaurantsData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    if (!data?.data?.cards[1].card.card.gridElements) {
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
    <main className="w-full min-w-0 h-full space-y-5">
      <BodyHeader
        setFiltered={setFiltered}
        resData={resData}
        searchText={searchText}
        setSearchText={setSearchText}
        filtered={filtered}
      />
      {JSON.stringify(filtered?.length)}
      <RestuarantCardsGrid loading={resData?.length === 0} data={filtered} />
      <BodyPagination data={filtered} totalCount={resData?.length} setFiltered={setFiltered} />
    </main>
  )
}

export const BodyPagination = ({ totalCount, data, setFiltered }) => {
  console.log("BodyPagination")
  const pageSize = 5
  const totalPages = totalCount / pageSize
  const [currentPage, setCurrentPage] = useState(1)

  // useEffect(() => {
  //   const filtered = data?.slice(0, pageSize * currentPage)
  //   setFiltered(filtered)
  //   console.log("BodyPagination, useEffect,", { filtered })
  // }, [currentPage])

  function handlePrev() {
    // console.log(currentPage)
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1)
    }
    // const filtered = data?.slice(pageSize * currentPage)
    // setFiltered(filtered)
  }

  function handleNext() {
    // console.log(currentPage)
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
    // const filtered = data?.slice(pageSize * currentPage)
    // setFiltered(filtered)
  }
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="w-60 flex justify-evenly items-center">
        <button onClick={handlePrev}>{`<`}</button>
        <span className="text-xl font-mono">{currentPage}</span>
        <button onClick={handleNext}>{`>`}</button>
      </div>
    </footer>
  )
}

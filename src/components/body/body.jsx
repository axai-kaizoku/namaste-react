import { useEffect, useState } from "react"
import { useOnlineStatus } from "../../hooks/use-online-status"
import { BASE_ALL_RESTAURANTS_URL } from "../../utils/constants"
import { RestuarantCardsGrid } from "./body-grid"
import { BodyHeader } from "./body-header"
import { cn } from "../../utils/utils"
import Select from "../ui/select"

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
    // setFiltered(restaurantsData)
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
      {resData?.length ? (
        <BodyPagination data={resData} totalCount={resData?.length} setFiltered={setFiltered} />
      ) : null}
    </main>
  )
}

export const BodyPagination = ({ totalCount, data, setFiltered }) => {
  // console.log("BodyPagination")
  const defaultPageSize = 5
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const totalPages = totalCount / pageSize
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const filtered = data?.slice(pageSize * (currentPage - 1), pageSize * currentPage)
    setFiltered(filtered)
    // console.log("BodyPagination, useEffect,", { filtered })
  }, [currentPage, pageSize])

  function handlePrev() {
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
    <footer className="w-full flex justify-end items-center">
      <div className="w-fit flex gap-4 items-center">
        Page {currentPage} of {Math.ceil(totalPages)}{" "}
        <button
          disabled={currentPage === 1}
          onClick={handlePrev}
          className={"disabled:cursor-not-allowed"}
        >{`<`}</button>
        <span className="text-xl font-mono">{currentPage}</span>
        <button
          disabled={currentPage >= totalPages}
          onClick={handleNext}
          className={"disabled:cursor-not-allowed"}
        >{`>`}</button>
        <select name="page-size" defaultValue={"1"} onChange={(e) => setPageSize(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </footer>
  )
}

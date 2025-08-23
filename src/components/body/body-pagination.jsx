import { useState, useEffect } from "react"
export const BodyPagination = ({ data, setFiltered }) => {
  // console.log("BodyPagination")
  const defaultPageSize = 5
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const totalPages = data?.length / pageSize
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
        <select
          name="page-size"
          defaultValue={"1"}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
            setCurrentPage(1)
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </footer>
  )
}

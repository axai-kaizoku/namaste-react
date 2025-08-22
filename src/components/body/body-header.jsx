export const BodyHeader = ({ setFiltered, resData, searchText, setSearchText, filtered }) => {
  // console.log("BodyHeader")
  return (
    <header className="w-full flex justify-start gap-2">
      <form
        id="search-bar"
        className="w-fit flex gap-2 h-fit"
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
          className="p-2 border border-input rounded-md max-w-48 text-sm"
          placeholder="Search anything..."
        />
        <button type="submit">Search</button>
      </form>
      <button
        onClick={() => {
          const filtered = resData?.filter((res) => res.info.avgRating > 4.5)
          setFiltered(filtered)
        }}
      >
        Ratings above 4.5
      </button>
      {JSON.stringify(filtered) !== JSON.stringify(resData) ? (
        <button
          className="bg-transparent border hover:border-accent-foreground hover:border-dashed"
          onClick={() => {
            setFiltered(resData)
            if (searchText) setSearchText("")
          }}
        >
          Clear
        </button>
      ) : null}
    </header>
  )
}

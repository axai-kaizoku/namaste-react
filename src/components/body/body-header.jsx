import { useUser } from "../../hooks/use-user"

export const BodyHeader = ({ setFiltered, resData, searchText, setSearchText, filtered }) => {
  const { loggedInUser, setUserName } = useUser()

  return (
    <header className="w-full flex justify-between gap-2">
      <div className="flex justify-start gap-2">
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
      </div>

      <div className="flex gap-2 items-center">
        <label htmlFor="name">User Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={loggedInUser ?? ""}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </header>
  )
}

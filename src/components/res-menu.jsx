import { useEffect, useState } from "react"

export default function ResMenu() {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  async function fetchMenu() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=426730&catalog_qa=undefined&submitAction=ENTER"
    )

    const data = await res.json()

    console.log(data)

    setResInfo(data?.data?.cards[2]?.card?.card?.info)
  }
  return (
    <div className="container">
      {console.log(resInfo)}
      <h1>{resInfo?.name}</h1>
      <h3>{resInfo?.cuisines.join(", ")}</h3>
      <h3>{resInfo?.costForTwoMessage}</h3>
      <h2>Menu</h2>
    </div>
  )
}

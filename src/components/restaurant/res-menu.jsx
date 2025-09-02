import { useParams } from "react-router"
import { useRestaurantMenu } from "../../hooks/use-restaurant-menu"
import { Skeleton } from "../ui/skeleton"
import { MenuItemList } from "./menu-item-list"

export default function ResMenu() {
  const { id } = useParams()

  const resInfo = useRestaurantMenu(id)

  if (!resInfo) return <Skeleton />

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

  const wholeMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  console.log(wholeMenu)

  return (
    <section className="w-full">
      <h1>{name}</h1>

      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <br />
      <h2>Menu</h2>

      <MenuItemList key="menu-item" data={wholeMenu} />
    </section>
  )
}

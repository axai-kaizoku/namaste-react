import { useParams } from "react-router"
import { useRestaurantMenu } from "../../hooks/use-restaurant-menu"
import { Skeleton } from "../ui/skeleton"
import { MenuItemList } from "./menu-item-list"

export default function ResMenu() {
  const { id } = useParams()

  const resInfo = useRestaurantMenu(id)

  if (!resInfo) return <Skeleton />

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

  const wholeMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (data) => data?.card?.card?.itemCards || data?.card?.card?.categories
  )
  // console.log(wholeMenu)

  return (
    <section className="w-full space-y-2">
      <h1 className="text-center text-3xl font-bold">{name}</h1>

      <h3 className="text-center text-lg font-semibold">{cuisines.join(", ")}</h3>
      <h3 className="text-center text-sm">{costForTwoMessage}</h3>
      <br />
      <h2 className="text-center text-xl">Menu</h2>

      <MenuItemList key="menu-item" data={wholeMenu} />
    </section>
  )
}

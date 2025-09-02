import { MenuItemCard } from "./menu-item-card"

export const MenuItemList = ({ data }) => {
  return (
    <div>
      {data.map((menu, index) => (
        <MenuItemCard data={menu} key={index} />
      ))}
    </div>
  )
}

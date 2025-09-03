import { MenuItemCard } from "./menu-item-card"
import { useState } from "react"

export const MenuItemList = ({ data }) => {
  const [open, setOpen] = useState(undefined)

  return (
    <div>
      {data.map((menu, index) => (
        <MenuItemCard
          open={open === index}
          onOpenChange={() => setOpen((prev) => (prev === index ? undefined : index))}
          data={menu}
          key={index}
        />
      ))}
    </div>
  )
}

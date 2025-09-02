import { BASE_IMG_URL } from "../../utils/constants"
import { cn } from "../../utils/utils"
import { useState } from "react"

export const MenuItemCard = ({ data, open, onOpenChange }) => {
  const [open2, setOpen2] = useState(undefined)

  return (
    <Accordion
      open={open}
      onOpenChange={onOpenChange}
      title={data?.card?.card?.title ?? "--"}
      key={data?.card?.card?.title ?? "-"}
    >
      <ul>
        {data?.card?.card?.categories
          ? data?.card?.card?.categories?.map((card) => (
              <Accordion
                open={open2 === card?.title}
                onOpenChange={() => setOpen2((prev) => (prev === card?.title ? undefined : card?.title))}
                title={card?.title}
                key={card?.title}
                outerClassName={"w-11/12"}
                className={"w-11/12"}
              >
                <ul>
                  {card?.itemCards?.map((c) => (
                    <SingleItemCard
                      key={c?.card?.info?.id}
                      name={c?.card?.info?.name}
                      defaultPrice={c?.card?.info?.defaultPrice}
                      description={c?.card?.info?.description}
                      imageId={c?.card?.info?.imageId}
                      price={c?.card?.info?.price}
                    />
                  ))}
                </ul>
              </Accordion>
            ))
          : data?.card?.card?.itemCards?.map((card) => (
              <SingleItemCard
                key={card?.card?.info?.id}
                name={card?.card?.info?.name}
                defaultPrice={card?.card?.info?.defaultPrice}
                description={card?.card?.info?.description}
                imageId={card?.card?.info?.imageId}
                price={card?.card?.info?.price}
              />
            ))}
      </ul>
    </Accordion>
  )
}

export const Accordion = ({ children, title, className, outerClassName, open, onOpenChange }) => {
  return (
    <div>
      <div
        onClick={onOpenChange}
        className={cn("w-1/2 cursor-pointer border p-2 rounded bg-card shadow my-1 mx-auto", outerClassName)}
      >
        {title}
      </div>
      {open && <div className={cn("flex flex-col gap h-full w-1/2 mx-auto", className)}>{children}</div>}
    </div>
  )
}

export const SingleItemCard = ({ name, price, defaultPrice, description, imageId }) => (
  <li>
    <div className="flex flex-row p-4 h-full gap-4 items-center justify-start border rounded m-4">
      <div className="flex flex-col items-start justify-start  gap-3 w-9/12">
        <h1 className="font-semibold">{name}</h1>
        <span className="text-sm">₹{price ? price / 100 : defaultPrice / 100}</span>
        <p className="text-xs">{description}</p>
      </div>
      <div className="w-3/12">
        <img
          src={BASE_IMG_URL + imageId}
          alt={name}
          className="object-contain rounded w-28 h-28"
          width={200}
          height={200}
        />
      </div>
    </div>
  </li>
)

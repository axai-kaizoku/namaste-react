import { useState } from "react"
import { useParams } from "react-router"
import { useRestaurantMenu } from "../../hooks/use-restaurant-menu"
import { BASE_IMG_URL } from "../../utils/constants"

export default function ResMenu() {
  const [showImage, setShowImage] = useState(undefined)
  const { id } = useParams()

  const resInfo = useRestaurantMenu(id)

  if (!resInfo)
    return (
      <div className="flex flex-col gap">
        <div className="skeleton" style={{ width: "30rem" }}></div>
        <div className="skeleton" style={{ width: "30rem" }}></div>
        <div className="skeleton" style={{ width: "30rem" }}></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div>
    )

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

  // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card

  const wholeMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1).slice(0, -2)

  return (
    <section className="">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <br />
      <h2>Menu</h2>

      {wholeMenu.map((menu, index) => (
        <details key={menu?.card?.card?.title} open={index === 0}>
          <summary>{menu?.card?.card?.title}</summary>
          <div className="flex flex-col gap h-full">
            <ul>
              {menu?.card?.card?.itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>
                  <div className="flex flex-row p-4 h-full gap-4 items-center justify-start border rounded m-4">
                    <dialog
                      open={showImage === item?.card?.info?.imageId}
                      style={{ width: "50%", height: "50%", top: "20%", left: "20%", right: "30%" }}
                    >
                      <form method="dialog">
                        <button autoFocus>X</button>
                      </form>
                      <img
                        src={BASE_IMG_URL + item?.card?.info?.imageId}
                        alt={item?.card?.info?.name}
                        className="m-4 rounded object-contain"
                        style={{
                          width: "20rem",
                          height: "20rem",
                        }}
                        onClick={() => setShowImage(item?.card?.info?.imageId)}
                      />
                    </dialog>
                    <img
                      src={BASE_IMG_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                      className="object-contain rounded"
                      width={300}
                      height={300}
                      onClick={() => setShowImage(item?.card?.info?.imageId)}
                    />
                    <div className="flex flex-col items-start justify-start h-48 gap-3">
                      <div className="flex justify-between w-full items-start">
                        <h1 className="text-lg font-semibold">{item?.card?.info?.name}</h1>
                        <p className="rounded-md shadow border px-3 py-1.5 bg-card text-sm">
                          ₹
                          {item?.card?.info?.price
                            ? item?.card?.info?.price / 100
                            : item?.card?.info?.defaultPrice / 100}
                        </p>
                      </div>
                      <p>{item?.card?.info?.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </section>
  )
}

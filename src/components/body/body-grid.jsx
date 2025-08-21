import { RestaurantCard, withPromtedLabel } from "../restaurant-card"
import { Skeleton } from "../ui/skeleton"

export const RestuarantCardsGrid = ({ data, loading }) => {
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard)
  console.log("RestuarantCardsGrid")
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 items-start  gap-3 h-full w-full">
      {loading ? (
        <GridSkeleton />
      ) : (
        <>
          {data?.map((restaurant) =>
            restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted key={restaurant?.info?.id} info={restaurant?.info} />
            ) : (
              <RestaurantCard key={restaurant?.info?.id} info={restaurant?.info} />
            )
          )}
        </>
      )}
    </div>
  )
}

export function GridSkeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4, 69, 90, 6, 67].map((i) => (
        <Skeleton key={i} />
      ))}
    </>
  )
}

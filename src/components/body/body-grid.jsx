import { RestaurantCard, withPromtedLabel } from "../restaurant-card";
import { Skeleton } from "../ui/skeleton";

export const RestuarantCardsGrid = ({ data, loading }) => {
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  // console.log("RestuarantCardsGrid", data[0])
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
  );
};

export function GridSkeleton({ size }) {
  return (
    <>
      {Array.from({ length: size ?? 5 }).map((_, i) => (
        <Skeleton
          key={i}
          className={
            "w-48 sm:w-56 h-60 sm:aspect-[1/2] border p-3 rounded-lg bg-card/40 hover:bg-card flex flex-col justify-between  gap-2"
          }
        />
      ))}
    </>
  );
}

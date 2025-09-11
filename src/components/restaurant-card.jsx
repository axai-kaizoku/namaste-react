import { Link } from "react-router";
import { useUser } from "../hooks/use-user";
import { BASE_IMG_URL } from "../utils/constants";

export const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = data;
  const { loggedInUser } = useUser();
  return (
    <Link to={"/restaurant/" + data?.id} className="block">
      <div
        data-testid="resCard"
        className="w-48  sm:w-56 h-fit   sm:aspect-[1/2] border p-3 rounded-lg bg-card/40 hover:bg-card flex flex-col justify-between  gap-2"
      >
        <img
          width="240"
          height="260"
          src={BASE_IMG_URL + cloudinaryImageId}
          alt="food"
          className="w-52 h-auto object-contain rounded"
        />
        <h3 className="text-xl font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="w-full flex items-end justify-between">
          <h5>{avgRating} stars</h5>
          <h6 className="text-xs">{sla?.deliveryTime} minutes</h6>
        </div>
        <h6 className="text-sm font-semibold">User: {loggedInUser}</h6>
      </div>
    </Link>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute p-2 bg-foreground/90 text-background rounded">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

import { useDispatch } from "react-redux";
import { BASE_IMG_URL } from "../../utils/constants";
import { cn } from "../../utils/utils";
import { useState } from "react";
import { addItem } from "../../utils/store/slices/cart-slice";

export const MenuItemCard = ({ data, open, onOpenChange }) => {
  const [open2, setOpen2] = useState(0);

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
                  {card?.itemCards?.map((item) => (
                    <SingleItemCard key={item?.card?.info?.id} item={item?.card?.info} />
                  ))}
                </ul>
              </Accordion>
            ))
          : data?.card?.card?.itemCards?.map((item) => (
              <SingleItemCard key={item?.card?.info?.id} item={item?.card?.info} />
            ))}
      </ul>
    </Accordion>
  );
};

export const Accordion = ({ children, title, className, outerClassName, open, onOpenChange }) => {
  return (
    <div>
      <div
        onClick={onOpenChange}
        className={cn(
          "w-[75%]  cursor-pointer border p-2 rounded bg-card shadow my-3 mx-auto flex justify-between items-center",
          outerClassName
        )}
      >
        {title}
        <div>↓</div>
      </div>
      {open ? <div className={cn("flex flex-col gap h-full w-[75%] mx-auto", className)}>{children}</div> : null}
    </div>
  );
};

export const SingleItemCard = ({ item, actionButton }) => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  const { name, defaultPrice, description, imageId, price } = item;

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <li>
      <div
        className={cn(
          "flex transition-all flex-row p-4 h-32 gap-4 items-center justify-start border rounded m-4",
          "h-40"
        )}
      >
        <div className="flex flex-col items-start justify-start  gap-3 w-9/12">
          <h1 className="font-semibold">{name}</h1>
          <span className="text-sm">₹{price ? price / 100 : defaultPrice / 100}</span>
          <div className="text-xs">
            <div>
              {(() => {
                const fullDescription = description;
                const descLength = fullDescription?.length;

                if (descLength < 200) {
                  return fullDescription;
                }

                const trimmed = description?.slice(0, descLength / 2);
                return showMore ? (
                  <>{fullDescription}</>
                ) : (
                  <span>
                    {trimmed}...{" "}
                    <button
                      className="inline p-0 font-bold text-xs bg-transparent border-none  cursor-pointer"
                      onClick={() => setShowMore((prev) => !prev)}
                    >
                      show more
                    </button>
                  </span>
                );
              })()}
            </div>
          </div>
        </div>
        <div className="w-3/12 relative h-full">
          <img
            src={BASE_IMG_URL + imageId}
            alt={name}
            className="object-contain mx-auto rounded-lg w-28 h-24"
            width={200}
            height={200}
          />
          {!actionButton ? (
            <div className="absolute bottom-[2%] w-full">
              <button
                onClick={() => handleAdd(item)}
                className="w-3/4 mx-auto bg-muted hover:border hover:border-dashed hover:border-foreground"
                title="Add item"
              >
                Add
              </button>
            </div>
          ) : (
            actionButton
          )}
        </div>
      </div>
    </li>
  );
};

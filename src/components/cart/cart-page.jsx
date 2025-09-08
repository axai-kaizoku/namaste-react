import { useSelector } from "react-redux";
import { jsonStringify } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../utils/store/slices/cart-slice";
import { useNavigate } from "react-router";
import { SingleItemCard } from "../restaurant/menu-item-card";

export const CartPage = () => {
  const cart = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="w-full h-[80dvh]">
      <h1 className="text-2xl font-bold my-3">Cart </h1>
      <div className="grid grid-cols-6 gap-20 w-full h-full">
        <div className="col-span-4  w-full">
          <div className=" flex justify-between">
            <button
              onClick={() => navigate(-1)}
              className="rounded-full bg-transparent border-none text-2xl"
              title="Go Back"
            >
              ⬅️
            </button>
            <button
              className="rounded-full bg-transparent border-none text-2xl"
              title="Clear cart"
              onClick={handleClearCart}
            >
              🗑️
            </button>
          </div>
          <ul className="border rounded-lg w-full h-full p-4">
            {!cart ||
              (cart.length === 0 && <div className="text-center my-20 font-mono text-xl">Your cart is empty :(</div>)}
            {cart?.map((item, i) => (
              <SingleItemCard
                key={i}
                item={item}
                actionButton={<button onClick={() => handleRemoveItem(item.id)}>Remove</button>}
              />
            ))}
          </ul>
        </div>
        <div className="col-span-2 w-full">
          <h1 className="text-lg font-medium my-2.5">Summary</h1>
          <div className="border rounded-lg w-full h-full p-4">cart length:{cart?.length}</div>
        </div>
      </div>
    </div>
  );
};

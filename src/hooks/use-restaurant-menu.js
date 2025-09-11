import { useEffect, useState } from "react";
import { BASE_RESTAURANT_URL, BASE_RESTAURANT_URL_END } from "../utils/constants";

export const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const res = await fetch(BASE_RESTAURANT_URL + id + BASE_RESTAURANT_URL_END);

    const data = await res.json();
    // console.log(data);

    setResInfo(data?.data);
  }

  return resInfo;
};

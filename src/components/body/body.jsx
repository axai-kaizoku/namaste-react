import { useEffect, useState } from "react";
import { useOnlineStatus } from "../../hooks/use-online-status";
import { BASE_ALL_RESTAURANTS_URL } from "../../utils/constants";
import { RestuarantCardsGrid } from "./body-grid";
import { BodyHeader } from "./body-header";

export const Body = () => {
  const [resData, setResData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  const onlineState = useOnlineStatus();

  // When ever a state variable changes, react re-renders the component
  // console.log("Body rendered")

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(BASE_ALL_RESTAURANTS_URL);

      const data = await res.json();

      let restaurantsData = data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (!data.data?.cards[1].card.card.gridElements) {
        restaurantsData = data.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      }

      setResData(restaurantsData);
    } catch {
      setError(true);
    }
  }

  if (!onlineState) {
    return (
      <div>
        <h1 className="text-center">Look's like you've gone offline !!</h1>
      </div>
    );
  }

  if (error) {
    return <h1 className="text-center text-5xl font-semibold">Error fetching data !</h1>;
  }

  return (
    <main className="w-full min-w-0 h-full space-y-5">
      <BodyHeader
        setFiltered={setFiltered}
        resData={resData}
        searchText={searchText}
        setSearchText={setSearchText}
        filtered={filtered}
      />
      <RestuarantCardsGrid loading={resData?.length === 0} data={filtered} />
      {resData?.length ? <CursorBasedPagination data={resData} setFiltered={setFiltered} filtered={filtered} /> : null}
      {/* {resData?.length ? <BodyPagination data={resData} setFiltered={setFiltered} /> : null} */}
    </main>
  );
};

export const CursorBasedPagination = ({ data: ogData, setFiltered, filtered }) => {
  const pageSize = 5;
  const data = ogData?.map((e, i) => ({ ...e, pId: i + 1 }));
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    handlePagination();
  }, []);

  const handlePagination = () => {
    let newItems = [];
    if (cursor === null) {
      newItems = data?.slice(0, pageSize) || [];
    } else {
      const cursorIndex = data?.findIndex((itm) => itm.pId === cursor);
      if (cursorIndex !== -1) {
        newItems = data?.slice(cursorIndex + 1, cursorIndex + 1 + pageSize);
      }
    }

    if (newItems.length > 0) {
      setCursor(newItems[newItems.length - 1].pId);
    }

    setFiltered((prev) => [...prev, ...newItems]);
  };

  const hasMore = filtered?.length < data?.length;

  return (
    <div className="w-full flex justify-center items-center">
      <button
        disabled={!hasMore}
        onClick={() => {
          handlePagination();
        }}
        className={"disabled:cursor-not-allowed"}
      >
        Load More
      </button>
    </div>
  );
};

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Body } from "../components/body/body";
import RESTAURANTS_DATA from "../mock/restaurantsData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANTS_DATA);
    },
  });
});

it("Should search for pizza in Body component with input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const clearAllBtn = screen.getByRole("button", { name: "Clear" });

  fireEvent.click(clearAllBtn);

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  // const searchInput = screen.getByPlaceholderText(/Search/);
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurants on click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(5);

  const topRatingFilterBtn = screen.getByRole("button", { name: /Ratings/ });

  fireEvent.click(topRatingFilterBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(4);
});

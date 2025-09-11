import { render, screen } from "@testing-library/react";
import { RestaurantCard, withPromtedLabel } from "../components/restaurant-card";
import { BrowserRouter } from "react-router";
import mockData from "../mock/resCardData.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard data={mockData?.info} />
    </BrowserRouter>
  );

  const card = screen.getByText("Pizza Hut");

  // console.log(card);

  expect(card).toBeInTheDocument();
});

it("Should render HOC of Restaurant Card with props data", () => {
  const RestaurantCardWithPromoted = withPromtedLabel(RestaurantCard);
  render(
    <BrowserRouter>
      <RestaurantCardWithPromoted data={mockData?.info} />
    </BrowserRouter>
  );

  const card = screen.getByText("Pizza Hut");

  // console.log(card);

  expect(card).toBeInTheDocument();
});

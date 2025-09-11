import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ResMenu from "../components/restaurant/res-menu";
import MOCK_DATA from "../mock/resMenu.json";
import appStore from "../utils/store/app-store";
import { Header } from "../components/header";
import { BrowserRouter } from "react-router";
import { CartPage } from "../components/cart/cart-page";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Cart functionality testing", () => {
  it("Should load restaurant Menu component", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <ResMenu />
            <CartPage />
          </BrowserRouter>
        </Provider>
      );
    });

    const accordion = screen.getByText("Better Deal for 1 Bowl");

    expect(accordion).toBeInTheDocument();

    fireEvent.click(accordion);

    const innerAccordions = screen.getAllByText(/Better Deal for 1 Bowl -/);

    expect(innerAccordions.length).toBe(4);

    fireEvent.click(innerAccordions[0]);

    const foodItem = screen.getByText(/Mutter Mushroom/);

    expect(foodItem).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button", { name: "Add" });

    expect(addBtn.length).toBe(15);

    expect(screen.getByText("🛒 (0 Items)")).toBeInTheDocument();

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("🛒 (1 Items)")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("🛒 (2 Items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItemCard").length).toBe(17);

    fireEvent.click(screen.getByRole("button", { name: "🗑️" }));

    expect(screen.getByText("Your cart is empty :(")).toBeInTheDocument();
  });
});

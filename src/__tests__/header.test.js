import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../components/header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/store/app-store";
import { UserContextProvider } from "../utils/user-context";

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

it("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("link", { name: "Login" });

  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeTruthy();
});

it("Should render header component with cart icon", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒 (0 Items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with cart icon", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Items/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout onClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: /Login/ });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: /Logout/ });

  expect(logoutButton).toBeInTheDocument();
});

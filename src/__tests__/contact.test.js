import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contact } from "../components/contact";

describe("Contactus page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After each");
  // });
  test("Should load ContactUs Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button in ContactUs Page", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load name input in ContactUs Page", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    // Assertion
    expect(input).toBeInTheDocument();
  });

  test("Should load all the inputElements in ContactUs Page", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // We'll get react-element
    // console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(3);
  });
});

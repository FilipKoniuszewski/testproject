import Button from "../Button";

import {
  render,
  screen,
  cleanup,
  fireEvent,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../../App";

afterEach(() => {
  cleanup();
});

test("Button should change content when clicked", () => {
  const { getByTestId, getByRole } = render(<App />);
  const wrapper = getByTestId("wrapper");
  const button = within(wrapper).getByRole("button");
  expect(button).toHaveTextContent("Click me!");
  fireEvent.click(button);
  expect(button).toHaveTextContent("You clicked me!");
});

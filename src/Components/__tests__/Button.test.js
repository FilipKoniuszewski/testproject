import Button from "../Button";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

test("Button should be rendered", () => {
  const { getByTestId } = render(<Button />);
  const button = getByTestId("button-1");
  expect(button).toBeInTheDocument();
});

test("Button should have proper content", () => {
  const { getByTestId } = render(<Button content={"Click me!"} />);
  const button = getByTestId("button-1");
  expect(button).toHaveTextContent("Click me!");
});

test("Button should call onClick when clicked", () => {
  const mockClickFunction = jest.fn();
  const { getByTestId } = render(
    <Button clickEvent={mockClickFunction} content="Hello World!" />
  );
  userEvent.click(getByTestId("button-1"));
  expect(mockClickFunction).toHaveBeenCalled();
});

test("Button disabled on modal open", () => {
  const { getByTestId } = render(<Button isModalOpen={true} />);
  const button = getByTestId("button-1");
  expect(button).toBeDisabled();
});

test("Button enabled on modal close", () => {
  const { getByTestId } = render(<Button isModalOpen={false} />);
  const button = getByTestId("button-1");
  expect(button).toBeEnabled();
});

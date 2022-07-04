import {
  render,
  screen,
  cleanup,
  within,
  React,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import RegisterModal from "../RegisterModal";

afterEach(() => {
  cleanup();
});

test("Modal should be rendered", () => {
  render(<RegisterModal />);
  const registerModal = screen.getByTestId("modal-1");
  expect(registerModal).toBeInTheDocument();
});

test("Modal should have proper header", () => {
  render(<RegisterModal header="header" />);
  const { getByText } = within(screen.getByTestId("modal-1"));
  expect(getByText("header")).toBeInTheDocument();
});

test("Modal should have proper paragraph", () => {
  render(<RegisterModal paragraph="paragraph" />);
  const { getByText } = within(screen.getByTestId("modal-1"));
  expect(getByText("paragraph")).toBeInTheDocument();
});

test("Modal close button should call onClick when clicked", () => {
  const mockClickFunction = jest.fn();
  const { getByTestId } = render(
    <RegisterModal clickEvent={mockClickFunction} />
  );
  const modal = getByTestId("modal-1");
  fireEvent.click(within(modal).getByRole("button"));
  expect(mockClickFunction).toHaveBeenCalled();
});

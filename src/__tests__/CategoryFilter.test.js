import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton.classList).toContain("selected");
  expect(allButton.classList).not.toContain("selected");
});

test("clicking the category button filters the task list", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const codeButton = screen.queryByRole("button", { name: "Code" });

  fireEvent.click(codeButton);

  // Assuming you have an element with the task text, update the following lines with the correct query:
  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(allButton);

  // Assuming you have an element with the task text, update the following lines with the correct query:
  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});

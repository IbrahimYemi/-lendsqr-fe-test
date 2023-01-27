import { render, screen } from "@testing-library/react";
import FilterUser from "../components/FilterUser";
import HomeBody from "../components/HomeBody";
import userEvent from "@testing-library/user-event";

describe("FilterUser component", () => {
  it("should render Filter component correctly", () => {
    render(<FilterUser />);
    const element = screen.queryAllBy("filter-card");
    expect(element).not.toBeInTheDocument();
  });

  it("should show filter user form", async() => {
    render(<FilterUser />);
    const buttonElement = screen.getByRole("img");
    await userEvent.click(buttonElement);
  });

  it("should not show any error message when the component is loaded", () => {
    render(<HomeBody />);
    const alertElement = screen.getByRole("img");
    expect(alertElement).toBeInTheDocument();
});
});
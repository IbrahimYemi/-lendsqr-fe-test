import { render, screen } from "@testing-library/react";
import UserDetails from "../components/UserDetails";

describe("FilterUser component", () => {
    it("should not show any error message when the component is loaded", () => {
        render(<UserDetails />);
        const alertElement = screen.getByRole("user");
        expect(alertElement).toBeInTheDocument();
    });
});
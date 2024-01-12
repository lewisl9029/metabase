import { render, screen } from "support__/ui";
import { HomeCard } from "./HomeCard";

const setup = () => {
  render(<HomeCard>A look at table</HomeCard>);
};

describe("HomeCard", () => {
  it("should render correctly", () => {
    setup();
    expect(screen.getByText("A look at table")).toBeInTheDocument();
  });
});

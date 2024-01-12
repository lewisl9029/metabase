import { renderWithProviders, screen } from "support__/ui";
import { HomeHelpCard } from "./HomeHelpCard";

const setup = () => {
  renderWithProviders(<HomeHelpCard />);
};

describe("HomeHelpCard", () => {
  it("should render correctly", () => {
    setup();
    expect(screen.getByText("Metabase tips")).toBeInTheDocument();
  });
});

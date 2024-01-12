import LoadingAndErrorWrapper from "metabase/components/LoadingAndErrorWrapper";
import { createSampleDatabase } from "metabase-types/api/mocks/presets";
import { setupDatabasesEndpoints } from "support__/server-mocks";
import {
  renderWithProviders,
  screen,
  waitForLoaderToBeRemoved,
} from "support__/ui";
import { useDatabaseIdFieldListQuery } from "./use-database-id-field-list-query";

const TEST_DB = createSampleDatabase();

const TestComponent = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useDatabaseIdFieldListQuery({ id: TEST_DB.id });

  if (isLoading || error) {
    return <LoadingAndErrorWrapper loading={isLoading} error={error} />;
  }

  return (
    <div>
      {data.map(field => (
        <div key={field.getId()}>
          {field.displayName({ includeTable: true })}
        </div>
      ))}
    </div>
  );
};

const setup = () => {
  setupDatabasesEndpoints([TEST_DB]);
  renderWithProviders(<TestComponent />);
};

describe("useDatabaseIdFieldListQuery", () => {
  it("should be initially loading", () => {
    setup();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("should show data from the response", async () => {
    setup();
    await waitForLoaderToBeRemoved();
    expect(screen.getByText("Orders → ID")).toBeInTheDocument();
  });
});

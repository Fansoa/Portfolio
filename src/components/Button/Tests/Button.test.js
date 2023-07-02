import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "..";
import IntegrationProvider from "../../../../configs/jest/testUtils";

test("test Button", async () => {
  const result = render(
    <IntegrationProvider>
      <Button />
    </IntegrationProvider>
  );
  expect(result).toMatchSnapshot();
  screen.getByText("Toto");
});

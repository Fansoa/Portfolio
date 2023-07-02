import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "..";
import IntegrationProvider from "../../../../configs/jest/testUtils";
import { noop } from "../../../utils/methods/noop";

const mockOnClick = jest.fn(noop);

test("test Button", async () => {
  const { container } = render(
    <IntegrationProvider>
      <Button label="Label" onClick={mockOnClick} />
    </IntegrationProvider>
  );
  const component = screen.getByText(/label/i);
  fireEvent.click(component);
  expect(container).toMatchSnapshot();
  expect(mockOnClick).toBeCalledTimes(1);
  screen.getByText(/label/i);
});

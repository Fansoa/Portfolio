import { noop } from "..";

test("noop should return null", () => {
  expect(noop()).toBe(null);
});

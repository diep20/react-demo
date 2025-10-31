import { isValidPhone } from "../utils/validators";

test("valid phone returns true", () => {
  expect(isValidPhone("+254712345678")).toBe(true);
});

test("invalid phone returns false", () => {
  expect(isValidPhone("0712345678")).toBe(false);
  expect(isValidPhone("")).toBe(false);
});

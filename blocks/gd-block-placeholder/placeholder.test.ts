import { expect, test } from "vitest";
import { PlaceholderData } from "./types";

const testData: PlaceholderData = {
    text: "Test"
};

test("should succeed", () => {
  expect(testData.text).toBe("Test");
});

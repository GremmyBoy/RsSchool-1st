import Cards from "./src/Cards/Cards";
import App from "./src/App";
import { describe, expect, it, test } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Cards", () => {
  test("whatever", () => {
    const wrapper = render(<App />);
    wrapper.debug();
  });
});

// test("should have classname", () => {
//     render(<App />);
//     expect(
//       screen.getByRole("heading", {
//         level: 1,
//       })
//     ).toHaveTextContent("Hello World");
//   });

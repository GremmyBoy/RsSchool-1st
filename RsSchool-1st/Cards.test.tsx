import Cards from "./src/Cards/Cards";
import About from "./src/About/About";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Cards", () => {
  it("should have classname", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("About");
  });
});

import About from "./src/About/About";
import Form from "./src/Form/Form";
import Error from "./src/Error/Error";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

describe("About", () => {
  it("should have classname", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("About");
  });
});

describe("Error page", () => {
  it("should have classname", () => {
    render(<Error />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Error");
  });
});

describe("Form page", () => {
  it("should have classname", () => {
    render(<Form />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Form");
  });
});

describe("Name Input", () => {
  it("should have placeholder"),
    () => {
      render(<Form />);
      const nameInput = screen.getByPlaceholderText("Input your name");
      expect(nameInput).toBeInTheDocument();
    };
});

describe("Name Input event", () => {
  it("should have placeholder"),
    () => {
      render(<Form />);
      const nameInput = screen.getByPlaceholderText(
        "Input your name"
      ) as HTMLInputElement;
      fireEvent.change(nameInput, { target: { value: "something else" } });
      expect(nameInput.value).toBe("something else");
    };
});

import About from "./src/About/About";
import Form from "./src/Form/Form";
import Error from "./src/Error/Error";
import Search from "./src/Search/Search";
import Cards from "./src/Cards/Cards";
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

describe("Search Component", () => {
  afterEach(() => {
    localStorage.removeItem("inputValue");
  });

  it("renders a div with class 'Search__wrapper'", () => {
    const { container } = render(<Search />);
    expect(container.querySelector(".Search__wrapper")).toBeInTheDocument();
  });
});

describe("Cards Component", () => {
  const testCard = {
    title: "Test Product",
    brand: "Test Brand",
    price: 100,
    images: ["https://test.com/image.jpg"],
    id: 1,
    description: "An apple mobile which is nothing like apple",
    discountPercentage: 12.96,
    rating: 4.69,
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    stock: 4.69,
  };

  it("renders the card image", () => {
    const { container } = render(<Cards card={testCard} />);
    expect(container.querySelector(".card__image")).toBeInTheDocument();
  });

  it("renders the card title", () => {
    const { getByText } = render(<Cards card={testCard} />);
    expect(getByText("Test Product")).toBeInTheDocument();
  });

  it("renders the card brand", () => {
    const { getByText } = render(<Cards card={testCard} />);
    expect(getByText("Test Brand")).toBeInTheDocument();
  });

  it("renders the card price", () => {
    const { getByText } = render(<Cards card={testCard} />);
    expect(getByText("100$")).toBeInTheDocument();
  });
});

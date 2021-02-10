import React from "react";
import { render, cleanup } from "@testing-library/react";
import ArticleList from "./ArticlesList.jsx";

describe("ArticleList component", () => {
  afterEach(() => cleanup());
  it("renders a list of Articles", () => {
    const { asFragment } = render(<ArticleList articles={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
 // Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from '@testing-library/react';

import { Category } from "../../Category/types";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryList from "../CategoryList";

describe("CategoryList", () => {
  describe("Snapshot", () => {
    it("Should render and empty list", () => {
      const component = renderer.create(
        <Router>
          <CategoryList onChangeCategory={() => {}} categories={[]} />
        </Router>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Should render the list correctly", () => {
      const categories: Category[] = [
        {
          name: "cars",
          keywords: ["audi", "ferrari", "bmw"],
        },
        {
          name: "music",
          keywords: ["guitar", "drums", "bass"],
        },
      ];
      const component = renderer.create(
        <Router>
          <CategoryList onChangeCategory={() => {}} categories={categories} />
        </Router>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Behavior", () => {
    it("Should call the onChange function when the button is clicked", () => {
      const categories: Category[] = [
        {
          name: "cars",
          keywords: ["audi", "ferrari", "bmw"],
        },
        {
          name: "music",
          keywords: ["guitar", "drums", "bass"],
        },
      ];

      const changeCategory = jest.fn();

      const component = render(
        <Router>
          <CategoryList onChangeCategory={changeCategory} categories={categories} />
        </Router>
      );

      const firstItem = component.container.getElementsByTagName('li')[0]
      fireEvent.click(firstItem);
      expect(changeCategory).toHaveBeenCalledWith(categories[0]);
    });
  });
});

import React from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe";

it("renders without crashing", () => {
  const recipe = {
    label: "Chicken Vesuvio",
    ingredients: [
      {
        text: "1/2 cup olive oil",
        weight: 108.0
      },
      {
        text: "5 cloves garlic, peeled",
        weight: 15.0
      },
      {
        text: "2 large russet potatoes, peeled and cut into chunks",
        weight: 738.0
      },
      {
        text:
          "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
        weight: 1587.5732950000001
      },
      {
        text: "3/4 cup white wine",
        weight: 169.5
      },
      {
        text: "3/4 cup chicken stock",
        weight: 180.0
      },
      {
        text: "3 tablespoons chopped parsley",
        weight: 11.399999999999999
      },
      {
        text: "1 tablespoon dried oregano",
        weight: 5.9999999998985585
      },
      {
        text: "Salt and pepper",
        weight: 17.696839769999393
      },
      {
        text: "Salt and pepper",
        weight: 8.848419884999696
      },
      {
        text: "1 cup frozen peas, thawed",
        weight: 134.0
      }
    ]
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <Recipe key={recipe.label} ingredients={recipe.ingredients} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

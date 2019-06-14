import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Recipe from "./Recipe";
import { SearchSource } from "@jest/core";

test("search for chicken recipe", () => {
  expect("list of chicken recipe").not.toBe("pickle");
});

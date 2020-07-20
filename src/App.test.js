import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react";
import App from "./App";
import store from "./reduxLogic/store/store";
import MainDashboard from "./components/MainDashboard/MainDashboard";

/* TESTS */

describe("Start Info", () => {
  test("renders App component with Loading message", () => {
    render(<App />);
    expect(screen.getByText("Loading App...")).toBeInTheDocument();
  });
});

describe("Fetching Data", () => {
  test("store identifies fetching from useState", () => {
    const currentStore = store;
    expect(currentStore.getState().isFetching).toBe(true);
    console.log(currentStore.getState());
    screen.debug();
  });

  it("store receives countries information from GraphQL ", async () => {
    await act(async () => {
      const { getByText } = render(<App />);
      await waitForElementToBeRemoved(() => getByText("Loading App..."))
      const currentStore = store;
      expect(currentStore.getState().isValid).toBe(true);
      console.log(currentStore.getState().isValid);
    });
  });
});



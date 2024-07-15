import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../ReduxUtilis/appStore";
test(" component render in Header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const heading = screen.getByText("Home");
  expect(heading).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import About from "../Components/About";
import "@testing-library/jest-dom";
test(" component", () => {
  render(<About />);
  const heading= screen.getByText("About Us");
  expect(heading).toBeInTheDocument();
});

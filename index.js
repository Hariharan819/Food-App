import React from "react";
import ReactDOM from "react-dom/client";

const SubHeading = () => (
  <h3 className="Subheading">SubHeading Functional Component🚀</h3>
);

const Heading = () => (
  <div className="SubRoot">
    <h3>Functional Component🚀</h3>
    <SubHeading />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

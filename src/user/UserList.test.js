import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList";

it("renders without crashing", function () {
  render(<UserList />);
});

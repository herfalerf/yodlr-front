import React from "react";
import { render } from "@testing-library/react";
import UserCard from "./UserCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserCard
        id="17"
        firstName="Test"
        lastName="Testuser"
        email="testemail@test.com"
        state="active"
        key="17"
      />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

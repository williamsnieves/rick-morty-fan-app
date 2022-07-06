import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { createMemoryHistory } from "history";

test("Image is rendered into character details", () => {
  const history = createMemoryHistory();
  const fakeProps = {
    id: 1,
    image: "image",
    name: "name",
    species: "species",
    status: "status",
    gender: "gender",
  };

  render(
    <Router location={history.location} navigator={history}>
      <CharacterDetail
        {...{ fakeProps }}
        location={{ name: "location" }}
        origin={{ name: "origin" }}
      />
    </Router>
  );
  const linkElement = screen.getByAltText("detail img");
  expect(linkElement).toBeInTheDocument();
});

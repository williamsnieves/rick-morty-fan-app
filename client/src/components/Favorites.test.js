import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Favorites from "./Favorites";
import { createMemoryHistory } from "history";

test("Favorite component renders the right elements", () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <Favorites
        loadFavorites={() => {}}
        favorites={[
          {
            id: 1,
            characterData: {
              image: "test",
              status: "status",
              name: "name",
              location: { name: "test" },
              species: "test",
            },
          },
        ]}
      />
    </Router>
  );
  const linkElement = screen.getByText("status - test");
  expect(linkElement).toBeInTheDocument();
});

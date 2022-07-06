import { Routes, Route, Navigate } from "react-router-dom";
import CharacterContainer from "./containers/CharacterContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import NotFound from "./components/common/NotFound";
import LoginContainer from "./containers/LoginContainer";
import ProtectedRouteContainer from "./containers/ProtectedRouteContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>} />
        <Route path="login" element={<LoginContainer />} />
        <Route
          path="characters"
          element={
            <ProtectedRouteContainer>
              <CharacterContainer />
            </ProtectedRouteContainer>
          }
        />
        <Route
          path="favorites"
          element={
            <ProtectedRouteContainer>
              <FavoritesContainer />
            </ProtectedRouteContainer>
          }
        />

        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found"></Navigate>} />
      </Routes>
    </div>
  );
}

export default App;

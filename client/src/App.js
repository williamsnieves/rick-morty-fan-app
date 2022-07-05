import { Routes, Route, Navigate } from "react-router-dom";
import CharacterContainer from "./containers/CharacterContainer";
import Favorites from "./components/Favorites";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="characters" element={<CharacterContainer />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found"></Navigate>} />
      </Routes>
    </div>
  );
}

export default App;

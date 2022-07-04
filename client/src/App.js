import { useState } from "react";
import CharacterContainer from "./containers/CharacterContainer";
import Modal from "./components/common/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      {showModal ? (
        <Modal>
          <div>hola</div>
        </Modal>
      ) : null}
      <CharacterContainer />
    </div>
  );
}

export default App;

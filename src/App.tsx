import { useState } from "react";
import InputBox from "./components/Input/InputBox";
import DropdownModal from "./components/Modal/DropdownModal";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function toggleModal() {
    setShowModal((value) => !value);
    console.log(showModal);
  }

  function handleKeyPress() {}

  return (
    <div className="text-center flex flex-col">
      <h1 className="text-3xl pt-10 text-blue-800">Pick Users</h1>
      <InputBox
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onClick={toggleModal}
      />
      {showModal && <DropdownModal />}
    </div>
  );
}

export default App;

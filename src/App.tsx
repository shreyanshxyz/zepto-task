import { KeyboardEvent, useState } from "react";
import InputBox from "./components/Input/InputBox";
import DropdownModal from "./components/Modal/DropdownModal";
import Chip from "./components/Chip/Chip";
import ChipData from "./types/ChipData";
import users from "./data/users";

function App() {
  const [items, setItems] = useState<ChipData[]>(users);
  const [inputValue, setInputValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [chips, setChips] = useState<ChipData[]>([]);
  const [highilightChip, setHighilightChip] = useState<ChipData | null>();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setHighilightChip(null);
  }

  function toggleModal() {
    setShowModal((value) => !value);
    console.log(showModal);
  }

  function handleChipClick(item: ChipData) {
    setChips((prevChips) => [...prevChips, item]);
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    setInputValue("");
    toggleModal();
    setHighilightChip(null);
  }

  const removeChip = (item: ChipData) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== item.id));
    setItems((prevItems) => [...prevItems, item]);
  };

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      if (highilightChip) {
        const lastChip = chips[chips.length - 1];
        removeChip(lastChip);
        setHighilightChip(null);
      } else {
        setHighilightChip(chips[chips.length - 1]);
      }
    }
  }

  return (
    <div className="text-center items-center flex flex-col">
      <h1 className="text-3xl pt-10 pb-10 text-blue-800 font-serif font-bold">
        Pick Users
      </h1>
      <div className="flex items-center flex-wrap gap-2 border-b-blue-800 border-b-[3px] w-[900px] max-sm:w-60">
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            item={chip}
            onRemove={() => removeChip(chip)}
            highlightedChip={highilightChip}
          />
        ))}
        <InputBox
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onClick={toggleModal}
        >
          {showModal && (
            <DropdownModal
              items={items}
              inputValue={inputValue}
              onItemClick={handleChipClick}
            />
          )}
        </InputBox>
      </div>
    </div>
  );
}

export default App;

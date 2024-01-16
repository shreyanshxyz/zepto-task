import { KeyboardEvent, useState } from "react";
import InputBox from "./components/Input/InputBox";
import DropdownModal from "./components/Modal/DropdownModal";
import Chip from "./components/Chip/Chip";

type ChipData = {
  id: number;
  name: string;
  avatar: string;
  email: string;
};

function App() {
  const [items, setItems] = useState<ChipData[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567590",
    },
    {
      id: 2,
      name: "Anna Johnson",
      email: "anna.johnson@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567591",
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie.davis@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567592",
    },
    {
      id: 4,
      name: "David Miller",
      email: "david.miller@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567593",
    },
    {
      id: 5,
      name: "Ella Robinson",
      email: "ella.robinson@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567594",
    },
    {
      id: 6,
      name: "Frank Taylor",
      email: "frank.taylor@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567595",
    },
    {
      id: 7,
      name: "Gina Martinez",
      email: "gina.martinez@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567596",
    },
    {
      id: 8,
      name: "Henry Clark",
      email: "henry.clark@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567597",
    },
    {
      id: 9,
      name: "Katie Turner",
      email: "katie.turner@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567598",
    },
    {
      id: 10,
      name: "Leo Mitchell",
      email: "leo.mitchell@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9567500",
    },
  ]);
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
      <h1 className="text-3xl pt-10 pb-10 text-blue-800">Pick Users</h1>
      <div className="flex items-center flex-wrap gap-2 border-b-blue-800 border-b-[3px] w-[900px]">
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            item={chip}
            onRemove={() => removeChip(chip)}
            highlightedItem={highilightChip}
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

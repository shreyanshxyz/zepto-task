import React from "react";
import Avatar from "../Avatar/Avatar";

type ChipData = {
  id: number;
  name: string;
  avatar: string;
  email: string;
};

type DropdownModalProps = {
  items: ChipData[];
  inputValue: string;
  onItemClick: (item: ChipData) => void;
};

const DropdownModal: React.FC<DropdownModalProps> = ({
  items,
  inputValue,
  onItemClick,
}) => {
  return (
    <div className="absolute top-[50px] left-0 bg-white rounded-lg shadow-2xl z-[1] overflow-y-auto scrollbar max-h-[300px]">
      {items
        .filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((item) => (
          <div
            key={item.id}
            className="cursor-pointer p-3 flex justify-between  gap-4 items-center hover:bg-[#f0f0f0] min-w-[450px]"
            onClick={() => onItemClick(item)}
          >
            <div className="flex items-center gap-4">
              <Avatar avatarUrl={item.avatar} altText={item.name} />
              <span className="font-bold"> {item.name}</span>
            </div>
            <p>{item.email}</p>
          </div>
        ))}
    </div>
  );
};
export default DropdownModal;

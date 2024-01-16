import React from "react";
import Avatar from "../Avatar/Avatar";

type ChipData = {
  id: number;
  name: string;
  avatar: string;
  email: string;
};

type ChipProps = {
  item: ChipData;
  highlightedItem: ChipData | null | undefined;
  onRemove: () => void;
};

const Chip: React.FC<ChipProps> = ({ item, onRemove, highlightedItem }) => {
  return (
    <div
      className={
        highlightedItem?.id === item.id
          ? "flex justify-between items-center bg-[#e0e0e0] px-3 py-1 mb-2 rounded-3xl mr-2 border border-solid border-orange-400"
          : "flex justify-between items-center bg-[#e0e0e0] px-3 py-1 mb-2 rounded-3xl mr-2 border border-solid border-white"
      }
    >
      <Avatar avatarUrl={item.avatar} altText={item.name} />
      <p className="mr-2">{item.name}</p>
      <button
        className="flex items-center justify-center cursor-pointer h-5 w-5 border-none rounded-full font-black text-black"
        onClick={onRemove}
      >
        &#x2715;
      </button>
    </div>
  );
};
export default Chip;

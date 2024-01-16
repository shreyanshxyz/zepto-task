import React from "react";
import Avatar from "../Avatar/Avatar";

type ChipProps = {};

const Chip: React.FC<ChipProps> = () => {
  return (
    <div className="flex justify-between items-center bg-[#e0e0e0] p-2 rounded-3xl mr-2 border border-white border-solid">
      <Avatar />
      <p className="mr-4">Jonathan Doe</p>
      <button className="cursor-pointer h-5 w-5 text-[rgb(49,48,48)] flex items-center justify-center rounded-[50%] border-[none]">
        X
      </button>
    </div>
  );
};
export default Chip;

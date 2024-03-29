import Avatar from "../Avatar/Avatar";
import ChipProps from "../../types/ChipProps";

const Chip: React.FC<ChipProps> = ({ item, onRemove, highlightedChip }) => {
  return (
    <div
      className={
        highlightedChip?.id === item.id
          ? "flex justify-between items-center bg-[#e0e0e0] p-1 mb-2 rounded-3xl mr-2 border border-solid border-blue-600 gap-2 max-sm:mb-1"
          : "flex justify-between items-center bg-[#e0e0e0] p-1 mb-2 rounded-3xl mr-2 border border-solid border-white gap-2 max-sm:mb-1"
      }
    >
      <Avatar avatarUrl={item.avatar} altText={item.name} />
      <span className="font-serif max-sm:text-sm">{item.name}</span>
      <button
        className="flex items-center justify-center cursor-pointer h-5 w-5 border-none rounded-full text-black font-black"
        onClick={onRemove}
      >
        &#x2715;
      </button>
    </div>
  );
};
export default Chip;

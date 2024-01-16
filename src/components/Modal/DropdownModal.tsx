import Avatar from "../Avatar/Avatar";
import DropdownModalProps from "../../types/DropdownModalProps";

const DropdownModal: React.FC<DropdownModalProps> = ({
  items,
  inputValue,
  onItemClick,
}) => {
  return (
    <div className="absolute top-[50px] left-0 bg-white rounded-lg shadow-2xl z-[1] overflow-y-auto scrollbar max-h-[300px] max-sm:w-60 max-sm:overflow-x-hidden">
      {items
        .filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((item) => (
          <div
            key={item.id}
            className="cursor-pointer p-3 flex justify-start gap-4 items-center hover:bg-[#f0f0f0] min-w-[450px] max-sm:w-60"
            onClick={() => onItemClick(item)}
          >
            <Avatar avatarUrl={item.avatar} altText={item.name} />
            <div className="flex items-center justify-center gap-4 max-sm:flex-col max-sm:items-start max-sm:p-0 max-sm:text-sm max-sm:gap-0">
              <span className="font-bold"> {item.name}</span>
              <p className="">{item.email}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default DropdownModal;

import ChipData from "./ChipData";

type DropdownModalProps = {
  items: ChipData[];
  inputValue: string;
  onItemClick: (item: ChipData) => void;
};

export default DropdownModalProps;

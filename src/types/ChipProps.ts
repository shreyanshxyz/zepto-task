import ChipData from "./ChipData";

type ChipProps = {
  item: ChipData;
  highlightedChip: ChipData | null | undefined;
  onRemove: () => void;
};

export default ChipProps;

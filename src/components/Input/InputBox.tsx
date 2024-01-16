import { useEffect, useRef } from "react";
import InputBoxProps from "../../types/InputBoxProps";
const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange,
  onClick,
  onKeyDown,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="relative">
      <input
        className="p-2 text-lg mb-1 outline-none"
        type="text"
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        value={value}
        ref={inputRef}
        placeholder="Add new user..."
      />
      {children}
    </div>
  );
};
export default InputBox;

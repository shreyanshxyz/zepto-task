import React, { ReactNode, useEffect, useRef } from "react";

type InputBoxProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};

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
    <div>
      <input
        className="text-sm p-3 pt-10 border-blue-800 border-b-[3px] min-w-[800px] outline-none"
        type="text"
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        value={value}
        ref={inputRef}
        placeholder="Add new user..."
      />
    </div>
  );
};
export default InputBox;

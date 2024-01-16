import React from "react";

type InputBoxProps = {};

const InputBox: React.FC<InputBoxProps> = () => {
  return (
    <div>
      <input
        className="text-sm p-3 pt-10 border-blue-800 border-b-[3px] min-w-[800px] outline-none"
        type="text"
        placeholder="Add new user..."
      />
    </div>
  );
};
export default InputBox;

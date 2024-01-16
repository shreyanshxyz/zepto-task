import React from "react";
import Avatar from "../Avatar/Avatar";

type DropdownModalProps = {};

const DropdownModal: React.FC<DropdownModalProps> = () => {
  return (
    <div className="modal">
      <div className="item">
        <Avatar />
        <div className="ml-2">
          <span>Jonathan Doe</span>
          <span>johndoe@gmail.com</span>
        </div>
      </div>
      <div className="item">
        <Avatar />
        <div className="ml-2">
          <span>Jonathan Doe</span>
          <span>johndoe@gmail.com</span>
        </div>
      </div>
      <div className="item">
        <Avatar />
        <div className="ml-2">
          <span>Jonathan Doe</span>
          <span>johndoe@gmail.com</span>
        </div>
      </div>
      <div className="item">
        <Avatar />
        <div className="ml-2">
          <span>Jonathan Doe</span>
          <span>johndoe@gmail.com</span>
        </div>
      </div>
      <div className="item">
        <Avatar />
        <div className="ml-2">
          <span>Jonathan Doe</span>
          <span>johndoe@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
export default DropdownModal;

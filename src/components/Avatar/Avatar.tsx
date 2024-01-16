import React from "react";

type AvatarProps = {};

const Avatar: React.FC<AvatarProps> = () => {
  return (
    <img
      className="w-10 h-10 rounded-full"
      src="https://www.w3schools.com/howto/img_avatar2.png"
      alt="demo avatar"
    />
  );
};
export default Avatar;

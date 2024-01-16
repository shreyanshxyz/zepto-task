import React from "react";

type AvatarProps = {
  avatarUrl: string;
  altText: string;
};

const Avatar: React.FC<AvatarProps> = ({ avatarUrl, altText }) => {
  return (
    <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={altText} />
  );
};
export default Avatar;

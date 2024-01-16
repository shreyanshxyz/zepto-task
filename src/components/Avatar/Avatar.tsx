import AvatarProps from "../../types/AvatarProps";
const Avatar: React.FC<AvatarProps> = ({ avatarUrl, altText }) => {
  return (
    <img
      className="w-10 h-10 rounded-full max-sm:w-5 max-sm:h-5"
      src={avatarUrl}
      alt={altText}
    />
  );
};
export default Avatar;

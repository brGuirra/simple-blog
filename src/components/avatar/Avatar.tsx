import styles from "./Avatar.module.css";

type AvatarProps = {
  hasBorder?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};

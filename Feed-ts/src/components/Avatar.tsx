import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;

}

export function Avartar({ hasBorder = true, ...props }: AvatarProps) {

  return (
    <>
      <img className={hasBorder ? styles.avatarWhithBorder : styles.avatar}
        {...props}
      />
    </>
  );
}
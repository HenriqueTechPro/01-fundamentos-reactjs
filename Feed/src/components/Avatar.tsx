import styles from "./Avatar.module.css"
export function Avartar({hasBorder = true,src}){

  
  return(
    <>
       <img className={hasBorder ? styles.avatarWhithBorder : styles.avatar} src={src}/>
    </>
  );
}
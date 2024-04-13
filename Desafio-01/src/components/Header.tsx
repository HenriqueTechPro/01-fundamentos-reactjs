import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={rocketLogo} alt="" />
      <h1>
        <strong className={styles.blueText}>to</strong>
        <strong className={styles.purpleText}>do</strong>
      </h1>
    </header>
  );
}

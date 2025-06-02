import styles from "./header.module.css";
import JCLogo from "../../assets/jc_logo.png";
import crown from "../../assets/crown.svg";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
         
          <div className={styles.logo}>

            <img src={JCLogo} alt="jioCinema logo" width="200px" height="35px"/>
            <div className={styles.premium}>
              <img src={crown} alt="crown" /> Go Premium</div>

          </div>

        </nav>

        <div className={styles.search}></div>
      </header>
    </>
  );
}

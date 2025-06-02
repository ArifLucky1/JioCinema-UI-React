import styles from "./header.module.css";
import JCLogo from '../../assets/jc_logo.svg';
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearch from '../../assets/voice-search.svg'
import jioIcon from '../../assets/jio-logo.png'


export default function Header() {

        let navLinks = ['Home', 'Sports', 'Movies', 'TV Shows', 'More']
  
  return (
    <>
      <header className={styles.header}>
       
       <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JCLogo} alt="jc_logo" />
            <div className={styles.premium}>
              <img src={crown} alt="crown" /> <p>Go Premium</p> </div>
        </div>

      <ul className={styles.navLinks}>
            {navLinks.map((link)=>{
              return <li className={styles.navLink}>{link}</li>
            })
            }
      </ul>

       </nav>

        
        <div className={styles.search}>

            <div className={styles.searchBox}>

                <div className={styles.headerIcon}>
                    <img src={searchIcon} alt="search" />
                </div>

                <input type="text" className={styles.searchInput} placeholder="Movies, Shows and More" />

                <div className={styles.headerIcon}>
                    <img src={voiceSearch} alt="voice" />
                </div>

            </div>

            <img className={styles.usericon} src={jioIcon} alt="jio" />

        </div>
      </header>
    </>
  );
}

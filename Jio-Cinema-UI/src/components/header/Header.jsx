
import styles from './header.module.css'
import JCLogo from '../../assets/jc_logo.png'

export default function Header() {
  return (
    
    <>
        <header className={styles.header}>

                <nav className={styles.navigation}>
                    <img src={JCLogo} alt="jioCinema logo" width='200px' height='35px'/>
                    <div className={styles.premium}>Premium</div>
                </nav>

                <div className={styles.search}>

                </div>

        </header>
    </>
  )
}


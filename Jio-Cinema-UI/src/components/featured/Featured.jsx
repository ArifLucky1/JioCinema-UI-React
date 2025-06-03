import styles from './featured.module.css'
import avg from '../../assets/avenger1.jpg'

const Featured = () => {
  return (
    <>
    
        <section className={styles.featured}>

            <h1 className={styles.sectionTitle}>Hot Right Now 🔥</h1>

            <div className={styles.shows}>
                <div className={styles.featuredShow}>
                    <img src={avg} alt="Avenger" />
                </div>
            </div>

        </section>
    
    </>
  )
}

export default Featured

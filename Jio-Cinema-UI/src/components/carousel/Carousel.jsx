import styles from './carousel.module.css'
import strange from '../../assets/Spiderman-Dr-Strange.jpg'

const Carousel = () => {
  return (
    <>
    
        <section className={styles.carousel}>
          <img src={strange} alt="poster" />
        </section>
    
    </>
  )
}

export default Carousel

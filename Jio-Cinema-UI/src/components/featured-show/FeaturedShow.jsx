import styles from './featured-show.module.css'
import avg1 from '../../assets/avengers1.jpg'
import avg2 from '../../assets/avengers.jpg'
import spider from '../../assets/spider_man.jpg'

const FeaturedShow = () => {
  return (
    <>
    
        <div className={styles.featuredShow}>

                    {/* <img src={avg2} alt="Avenger" />
                    <img src={avg1} alt="Avenger" /> */}
                    <img src={spider} alt="spider" />   
                    
         </div>
         
    
    </>
  )
}

export default FeaturedShow

import styles from './featured-show.module.css'

import spider from '../../assets/spider_man.jpg'

const FeaturedShow = () => {
  return (
    <>
    
        <div className={styles.featuredShow}>
             <img src={spider} alt="spider" />   
                    
         </div>
         
    
    </>
  )
}

export default FeaturedShow

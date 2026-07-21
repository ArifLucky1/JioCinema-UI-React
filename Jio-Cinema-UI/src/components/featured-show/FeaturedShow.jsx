import styles from './featured-show.module.css'

// import spider from '../../assets/spider_man.jpg'

const FeaturedShow = (props) => {
  return (
    <>
    
        <div className={styles.featuredShow}>
             <img src={props.movie.imageUrl} alt="movie-Img" />   
            <div className={styles.movieTitle}>
                  {props.movie.name}
            </div>
         </div>
         
    
    </>
  )
}

export default FeaturedShow

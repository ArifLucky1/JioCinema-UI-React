import styles from './channels.module.css'
import colors from '../../assets/colors.png'
import gujrati from '../../assets/gujrati.jpg'
import hbo from '../../assets/HBO.jpg'
import infinity from '../../assets/infinity.jpg'
import kannada from '../../assets/kannada.jpg'
import mtv from '../../assets/Mtv.jpg'
import peacock from '../../assets/peacock.jpg'

const Channels = () => {
  return (
    <>
    
        <div className={styles.channels}>
            <img src={colors}   alt="colors" />
            <img src={gujrati}  alt="gujrati" />
            <img src={hbo}      alt="hbo" />
            <img src={infinity} alt="infinity" />
            <img src={kannada}  alt="kannada" />
            <img src={mtv}      alt="mtv" />
            <img src={peacock}  alt="peacock" />
        </div>
    
    </>
  )
}

export default Channels

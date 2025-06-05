import styles from './show.module.css'
import idiot from '../../assets/3idiot.jpg'

const Show = () => {
  return (
    <>

        <div className={styles.show}>
             <img src={idiot} alt="hindi poster" />
        </div>

    </>
  )
}

export default Show

import clsx from 'clsx'
import styles from './Heading.module.css'

function Heading() {
    console.log(styles)
  return (
    <>

        <h1>Hello moi nguoi nhe</h1>
        <div className={clsx(styles.description,{
            [styles.okokokok]:false
        })}>Trieu Nhiet Thanh </div>
        <div id={styles.card}></div>

    </>
  )
}
export default Heading
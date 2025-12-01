import styles from './Car.module.css'

type CarProps = {
    value: string;
    ano: number;
    modelo: string;
}

const Car = ({value, ano, modelo}: CarProps) => {
  return (
    <div className={styles.divPrincipal}>
        <h1 className={styles.h1Text}>{value}</h1>
        <br />
        <h2 className={styles.h1Text}>{ano}</h2>
        <br />
        <h3 className={styles.h1Text}>{modelo}</h3>
    </div>
  )
}

export default Car

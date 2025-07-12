import styles from './Title.module.css';
const Title = () => {
  return (
    <div className={styles.title}>
           <h1 className={styles.titleH1}>Calculateur IMC - Santé</h1>
           <h2 className={styles.titleH2}>Votre outil pour vérifier l`indice de masse corporelle.</h2>
    </div>
  );
}

export default Title;
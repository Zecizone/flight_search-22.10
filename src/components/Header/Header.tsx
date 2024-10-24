
import styles from './style.module.scss';
export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="src/assets/logo.png" alt="" />
      <h1 className={styles.title}>Поиск дешевых авиабилетов</h1>
    </div>
  );
}
import styles from './style.module.scss';

interface LoadButtonProps {
  onClick: () => void;
}

export default function LoadButton({ onClick } : LoadButtonProps) {
  return (
    <button className={styles.loadbutton} type='button' onClick={onClick}>
      Загрузить еще билеты
    </button>
  );
}

import styles from './Header.module.scss';

type TProps = {
  title: string;
};

export const Header = ({ title }: TProps) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <nav className={styles.nav}>
        <button className={styles.navButton}>Home</button>
        <button className={styles.navButton}>Profile</button>
        <button className={styles.navButton}>Messages</button>
      </nav>
    </header>
  );
};

import styles from './Header.module.scss';
import { useNavigation } from '../../hooks/useNavigation';

type TProps = {
  title: string;
};

export const Header = ({ title }: TProps) => {
  const { navigate } = useNavigation();

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <nav className={styles.nav}>
        <button className={styles.navButton} onClick={() => navigate('/')}>
          Home
        </button>
        <button className={styles.navButton} onClick={() => navigate('/profile')}>
          Profile
        </button>
        <button className={styles.navButton} onClick={() => navigate('/messages')}>
          Messages
        </button>
      </nav>
    </header>
  );
};

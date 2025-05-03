import styles from './Sidebar.module.scss';

type TProps = {
  userName: string;
};

export const Sidebar = ({ userName }: TProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.userProfile}>
        <div className={styles.avatar}></div>
        <h3>{userName}</h3>
      </div>
      <nav className={styles.sideNav}>
        <button>Friends</button>
        <button>Groups</button>
        <button>Events</button>
      </nav>
    </div>
  );
};

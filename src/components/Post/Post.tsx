import styles from './Post.module.scss';

type TProps = {
  userName: string;
  timeAgo: string;
  content: string;
};

export const Post = ({ userName, timeAgo, content }: TProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.postAvatar}></div>
        <div className={styles.postInfo}>
          <h4>{userName}</h4>
          <span>{timeAgo}</span>
        </div>
      </div>
      <p className={styles.postContent}>{content}</p>
      <div className={styles.postActions}>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

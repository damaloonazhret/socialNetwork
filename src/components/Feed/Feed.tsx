import { Post } from '../Post/Post';
import styles from './Feed.module.scss';

type TProps = {
  posts: Array<{
    id: number;
    userName: string;
    timeAgo: string;
    content: string;
  }>;
};

export const Feed = ({ posts }: TProps) => {
  return (
    <div className={styles.feed}>
      {posts.map((post) => (
        <Post
          key={post.id}
          userName={post.userName}
          timeAgo={post.timeAgo}
          content={post.content}
        />
      ))}
    </div>
  );
};

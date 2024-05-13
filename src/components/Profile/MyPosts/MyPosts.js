import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
      <div>
        My MyPosts
        <div>
          New post
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={styles.posts}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
}

export default MyPosts;
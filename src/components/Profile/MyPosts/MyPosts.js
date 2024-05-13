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
          <Post message="Hi, how are you? " likesCount="15 likes" />
          <Post message="It's my first  post " likesCount="14 likes" />
        </div>
      </div>
    );
}

export default MyPosts;
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://cdn-icons-png.flaticon.com/512/8188/8188349.png" alt="avatar" />
      {props.message}
      {props.likesCount}
    </div>
  );
};

export default Post;

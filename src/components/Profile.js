import styles from "./Profile.module.css";

const Profile = () => {
    return (
      <div className={styles.content}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1468434453985-b1ca3b555f00?ixlib=rb-4.0.3"
            alt="main img"
          />
        </div>
        <div>
          <img
            src="https://images.vexels.com/media/users/3/140236/isolated/preview/20d26c1064c9a7a4ccfc85820529b3f1-female-profile-avatar-3.png"
            alt="avatar"
          />
          <div>descr</div>
        </div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    );
}

export default Profile;